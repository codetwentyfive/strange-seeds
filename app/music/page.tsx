import Header from "../components/header/Header";
import Music from '../components/music/Music';
import Footer from "../components/footer/Footer";

export default function MusicPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Music />
      </main>
      <Footer />
    </div>
  );
}