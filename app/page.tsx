import Header from "./components/header/Header"; // Correct for default export
//import Hero from "./components/hero/Hero";
import UpcomingGigs from "./components/gigs/UpcomingGigs";
import Music from './components/music/Music';
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import ContactInfo from "./components/contact/ContactInfo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <About />
        <section id="gigs">
          <UpcomingGigs />
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
