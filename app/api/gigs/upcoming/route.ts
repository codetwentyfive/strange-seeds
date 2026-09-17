import { NextResponse } from 'next/server';
import gigsData from '@/app/data/gigs.json';

// Preserve static caching after the Next.js 15 upgrade.
export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json(gigsData);
}

