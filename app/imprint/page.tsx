import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function ImprintPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 mt-24 sm:mt-24 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Impressum</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>The Strange Seeds</p>
            <p>Vertreten durch:</p>
            <p>Patrick Knödlseder</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
            <p>E-Mail: info@thestrangeseeds.com</p>
            <p>Telefon: +49 (0) 170 356 255 8</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Urheberrecht</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
