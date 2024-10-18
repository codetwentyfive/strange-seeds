import Header from "../components/header/Header";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}
