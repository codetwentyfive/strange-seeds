'use client';

import { useState, useEffect } from "react";

interface Gig {
  id: number;
  date: string;
  venue: string;
  city: string;
  rsvpLink: string;
  ticketsLink: string;
}

export default function UpcomingGigs() {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch upcoming gigs data
    fetch('/api/gigs/upcoming')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGigs(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching gigs:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-12 bg-background mt-28 sm:mt-28 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8">
      <h2 className="font-display text-4xl mb-8 text-center">Upcoming Gigs</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {gigs.map((gig) => (
          <div key={gig.id} className="p-4 border rounded shadow flex flex-col">
            <div>
              <h3 className="text-2xl font-semibold">{gig.venue}, {gig.city}</h3>
              <p className="text-pretty text-gray-600">{gig.date}</p>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <a href={gig.rsvpLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm bg-transparent border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition duration-300 ease-in-out">
                RSVP
              </a>
              <a href={gig.ticketsLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm bg-transparent border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition duration-300 ease-in-out">
                Tickets
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
