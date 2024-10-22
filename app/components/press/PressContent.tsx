import Link from 'next/link';

export default function PressContent() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-8">Press Information</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 ">Press Kit</h2>
            <div className="space-y-2 underline">
              <DownloadLink href="/downloads/strange_seeds_presskit_en.pdf" label="Download Press Kit (English)" />
              <DownloadLink href="/downloads/strange_seeds_presskit_de.pdf" label="Download Press Kit (German)" />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tech Rider</h2>
            <div className="underline">
              <DownloadLink href="/downloads/strange_seeds_tech_rider.pdf" label="Download Tech Rider" />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 ">Contact</h2>
            <p>For press inquiries, please contact:</p>
            <p className="mt-2">
              <strong>Email:</strong> <a href="mailto:info@thestrangeseeds.com" className="text-blue-600 hover:underline">info@thestrangeseeds.com</a>
            </p>
            <p>
              <strong>Phone:</strong><a href="tel:+491703562558" className="text-blue-600 hover:underline">+49 (0) 170 356 255 8</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="block px-4 py-2 bg-foreground text-background rounded hover:bg-opacity-80 transition"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  );
}
