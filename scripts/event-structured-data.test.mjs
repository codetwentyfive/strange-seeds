import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const source = readFileSync(new URL('../app/components/EventStructuredData.tsx', import.meta.url), 'utf8');
const { outputText, diagnostics } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  reportDiagnostics: true,
});
assert.equal(diagnostics.length, 0);
const module = { exports: {} };
runInNewContext(outputText, { module, exports: module.exports, require });
const render = (gigs) => {
  const script = module.exports.default({ gigs });
  assert.equal(script.type, 'script');
  assert.equal(script.props.type, 'application/ld+json');
  return JSON.parse(script.props.dangerouslySetInnerHTML.__html);
};
const gigs = JSON.parse(readFileSync(new URL('../app/data/gigs.json', import.meta.url)));
const isoDateTime = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/;

test('generated events preserve actual dates, currencies and venue countries', () => {
  const events = render(gigs);
  assert.equal(events.length, gigs.length);
  assert.ok(gigs.some(gig => gig.priceCurrency === 'EUR'));
  assert.ok(gigs.some(gig => gig.priceCurrency === 'CZK'));
  events.forEach((event, index) => {
    const gig = gigs[index];
    assert.equal(event['@context'], 'https://schema.org');
    assert.equal(event['@type'], 'Event');
    assert.ok(event.name);
    assert.ok(event.location.name);
    assert.deepEqual(event.location.address, { '@type': 'PostalAddress', ...gig.address });
    assert.equal(event.startDate, gig.startDate);
    assert.equal(event.endDate, gig.endDate);
    assert.equal(event.offers.validFrom, gig.validFrom);
    for (const date of [event.startDate, event.endDate, event.offers.validFrom]) {
      assert.match(date, isoDateTime);
      assert.ok(Number.isFinite(Date.parse(date)));
    }
    assert.ok(Date.parse(event.endDate) >= Date.parse(event.startDate));
    assert.equal(event.offers.priceCurrency, gig.priceCurrency);
    assert.match(event.offers.priceCurrency, /^[A-Z]{3}$/);
    assert.equal(event.offers.url, gig.ticketsLink);
    assert.ok(['http:', 'https:'].includes(new URL(event.offers.url).protocol));
    // Google's price is numeric; omission is honest when no price is known.
    assert.equal(Object.hasOwn(event.offers, 'price'), false);
    assert.equal(Object.hasOwn(event.offers, 'availability'), false);
    assert.equal(Object.hasOwn(event, 'isAccessibleForFree'), false);
    assert.ok(!JSON.stringify(event).includes('TBA'));
  });
});

test('overnight event retains the following-day end date and timezone', () => {
  const [event] = render([gigs[0]]);
  assert.equal(event.endDate, '2025-01-12T03:00:00+01:00');
});

test('no gigs produces an empty JSON-LD array', () => {
  assert.deepEqual(render([]), []);
});
