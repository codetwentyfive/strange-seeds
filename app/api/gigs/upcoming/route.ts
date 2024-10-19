import { NextResponse } from 'next/server';
import gigsData from '@/app/data/gigs.json';

export async function GET() {
  return NextResponse.json(gigsData);
}

