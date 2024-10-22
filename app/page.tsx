'use client';

import { useState, useEffect } from 'react';
import Header from "./components/header/Header"; // Correct for default export
//import Hero from "./components/hero/Hero";
import UpcomingGigs from "./components/gigs/UpcomingGigs";
import Music from './components/music/Music';
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import ContactInfo from "./components/contact/ContactInfo";
import EventStructuredData from "./components/EventStructuredData";
import { Gig } from './components/types/gig';

export default function Home() {
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
      <EventStructuredData gigs={gigs} />
      <main className="flex-grow">
        <About />
        <section id="gigs">
          <UpcomingGigs gigs={gigs} />
        </section>
        <section id="music">
          <Music />
        </section>
        <section id="contact">
          <ContactInfo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
