"use client";
import { useState, useEffect } from 'react';
import Header from "../components/header/Header";
import UpcomingGigs from "../components/gigs/UpcomingGigs";
import Footer from "../components/footer/Footer";
import { Gig } from '../components/types/gig';

export default function GigsPage() {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/gigs/upcoming');
        if (!response.ok) {
          throw new Error('Failed to fetch gigs');
        }
        const data = await response.json();
        setGigs(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchGigs();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <UpcomingGigs gigs={gigs} isLoading={isLoading} error={error} />
      </main>
      <Footer />
    </div>
  );
}
