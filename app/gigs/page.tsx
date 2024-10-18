import Header from "../components/header/Header";
import UpcomingGigs from "../components/gigs/UpcomingGigs";
import Footer from "../components/footer/Footer";

export default function GigsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <UpcomingGigs />
      </main>
      <Footer />
    </div>
  );
}
