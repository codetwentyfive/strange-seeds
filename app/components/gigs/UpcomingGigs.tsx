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
      .then(response => response.json())
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
    <section className="py-12 bg-background">
      <h2 className="text-2xl font-bold text-center mb-8">Upcoming Gigs</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {gigs.map((gig) => (
          <div key={gig.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{gig.venue}, {gig.city}</h3>
            <p className="text-gray-600">{gig.date}</p>
            <div className="mt-4 flex space-x-4">
              <a href={gig.rsvpLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-foreground text-background rounded hover:bg-[#383838] transition">
                RSVP
              </a>
              <a href={gig.ticketsLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-foreground text-background rounded hover:bg-[#383838] transition">
                Tickets
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
