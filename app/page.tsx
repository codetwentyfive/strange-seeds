import Header from "./components/header/Header"; // Correct for default export
//import Hero from "./components/hero/Hero";
import UpcomingGigs from "./components/gigs/UpcomingGigs";
import SpotifyPreview from "./components/music/SpotifyPreview";
import YouTubeEmbed from "./components/music/YouTubeEmbed";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import ContactInfo from "./components/contact/ContactInfo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* <Hero /> */}
        <UpcomingGigs />
        <SpotifyPreview />
        <YouTubeEmbed />
        <About />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
