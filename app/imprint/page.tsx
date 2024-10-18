import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function ImprintPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Imprint</h1>
        <p>Your Imprint content goes here.</p>
      </main>
      <Footer />
    </div>
  );
}
