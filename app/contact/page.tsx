import Header from "../components/header/Header";
import ContactInfo from "../components/contact/ContactInfo";
import Footer from "../components/footer/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen p-4 mt-28 sm:mt-28 md:mt-16 lg:mt-20">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto mt-8 flex flex-col md:flex-row gap-8">
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
