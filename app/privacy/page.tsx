import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p>Your Privacy Policy content goes here.</p>
      </main>
      <Footer />
    </div>
  );
}
