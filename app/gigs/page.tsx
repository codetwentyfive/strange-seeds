"use client";
import { useState, useEffect } from 'react';
import Header from "../components/header/Header";
import UpcomingGigs from "../components/gigs/UpcomingGigs";
import Footer from "../components/footer/Footer";
import { Gig } from '../components/types/gig';

export default function GigsPage() {
  const [gigs, setGigs] = useState<Gig[]>([]);

  useEffect(() => {
    fetch('/api/gigs/upcoming')
      .then(response => response.json())
      .then(data => setGigs(data))
      .catch(error => console.error('Error fetching gigs:', error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <UpcomingGigs gigs={gigs} />
      </main>
      <Footer />
    </div>
  );
}
