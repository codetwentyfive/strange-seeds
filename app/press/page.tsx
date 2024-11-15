import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PressContent from "../components/press/PressContent";

export default function PressPage() {
  return (
    <div className="flex flex-col min-h-screen mt-24 sm:mt-24 md:mt-16 lg:mt-20">
      <Header />
      <main className="flex-grow">
        <PressContent />
      </main>
      <Footer />
    </div>
  );
}
