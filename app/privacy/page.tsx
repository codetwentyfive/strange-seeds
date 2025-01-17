import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 mt-24 sm:mt-24 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <p className="mb-4">
              Diese Website verzichtet bewusst auf die Verwendung von Cookies und Tracking-Tools. Wir erheben und speichern keine personenbezogenen Daten unserer Besucher.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Hosting und Serverprotokolle</h2>
            <p className="mb-4">
              Beim Besuch unserer Website werden automatisch durch den Server technische Zugriffsdaten erfasst. Dies umfasst:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>IP-Adresse (anonymisiert)</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p className="mb-4">
              Diese Daten werden automatisch gelöscht und dienen ausschließlich der technischen Bereitstellung der Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Soziale Medien und Eingebettete Inhalte</h2>
            
            <h3 className="text-lg font-semibold mb-2">Social Media Links</h3>
            <p className="mb-4">
              Unsere Website enthält Links zu verschiedenen sozialen Netzwerken (Instagram, Facebook, TikTok, YouTube, Spotify). Beim Klick auf diese Links verlassen Sie unsere Website. Die Datenverarbeitung auf diesen Plattformen unterliegt den Datenschutzbestimmungen der jeweiligen Anbieter.
            </p>

            <h3 className="text-lg font-semibold mb-2">YouTube</h3>
            <p className="mb-4">
              Auf unserer Website können YouTube-Videos eingebettet sein. Betreiber ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Die Videos werden erst nach Ihrer aktiven Zustimmung geladen.
            </p>

            <h3 className="text-lg font-semibold mb-2">Spotify</h3>
            <p className="mb-4">
              Wir binden Spotify-Player ein. Anbieter ist die Spotify AB, Birger Jarlsgatan 61, 113 56 Stockholm, Schweden. Die Player werden erst nach Ihrer aktiven Zustimmung geladen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten. Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
            </p>
            <p>E-Mail: info@thestrangeseeds.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
