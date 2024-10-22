import { Gig } from './types/gig';

interface EventStructuredDataProps {
  gigs: Gig[];
}

export default function EventStructuredData({ gigs }: EventStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: gigs.map((gig, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Event',
        name: `The Strange Seeds at ${gig.venue}`,
        startDate: gig.date,
        location: {
          '@type': 'Place',
          name: gig.venue,
          address: {
            '@type': 'PostalAddress',
            addressLocality: gig.city,
          },
        },
        performer: {
          '@type': 'MusicGroup',
          name: 'The Strange Seeds',
        },
        offers: {
          '@type': 'Offer',
          url: gig.ticketsLink,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

