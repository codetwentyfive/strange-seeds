'use client';

import { Gig } from '../types/gig';

interface UpcomingGigsProps {
  gigs: Gig[];
}

export default function UpcomingGigs({ gigs }: UpcomingGigsProps) {
  if (!gigs || gigs.length === 0) {
    return <div>No upcoming gigs at the moment.</div>;
  }

  return (
    <section className="py-12 bg-background mt-28 sm:mt-28 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8">
      <h2 className="font-display font-bold text-4xl mb-8 text-center">Upcoming Gigs</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {gigs.map((gig) => (
          <div key={gig.id} className="p-4 border rounded shadow flex flex-col">
            <div>
              <h3 className="text-2xl font-semibold">{gig.venue}, {gig.city}</h3>
              <p className="text-pretty text-gray-600">{gig.date}</p>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <a href={gig.ticketsLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm text-black bg-white border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition duration-300 ease-in-out">
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
