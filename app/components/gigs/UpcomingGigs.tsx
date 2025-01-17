'use client';

import { Gig } from '../types/gig';

interface UpcomingGigsProps {
  gigs: Gig[];
  isLoading?: boolean;
  error?: Error | null;
}

export default function UpcomingGigs({ gigs, isLoading = false, error = null }: UpcomingGigsProps) {
  if (isLoading) {
    return (
      <section className="py-12 bg-background mt-28 sm:mt-28 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8">
        <h2 className="font-display font-bold text-4xl mb-8 text-center">Upcoming Gigs</h2>
        <div className="max-w-4xl mx-auto grid gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="p-4 border rounded shadow animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-background mt-28 sm:mt-28 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8">
        <h2 className="font-display font-bold text-4xl mb-8 text-center">Upcoming Gigs</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-500">Failed to load gigs. Please try again later.</p>
        </div>
      </section>
    );
  }

  if (!gigs || gigs.length === 0) {
    return (
      <section className="py-12 bg-background mt-28 sm:mt-28 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8">
        <h2 className="font-display font-bold text-4xl mb-8 text-center">Upcoming Gigs</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p>No upcoming gigs at the moment.</p>
        </div>
      </section>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section className="py-12 bg-background mt-28 sm:mt-28 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8">
      <h2 className="font-display font-bold text-4xl mb-8 text-center">Upcoming Gigs</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {gigs.map((gig) => (
          <div key={gig.id} className="p-4 border rounded shadow flex flex-col">
            <div>
              <h3 className="text-2xl font-semibold">{gig.venue}, {gig.address.addressLocality}</h3>
              <p className="text-pretty text-gray-600">{formatDate(gig.startDate)}</p>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <a 
                href={gig.ticketsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1 text-sm text-black bg-white border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition duration-300 ease-in-out"
              >
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
