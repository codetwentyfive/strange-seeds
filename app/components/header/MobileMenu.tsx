import Link from 'next/link';

interface MobileMenuProps {
  onClose: () => void;
}

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/#gigs", label: "Gigs" },
  { href: "/#music", label: "Music" },
  { href: "/#contact", label: "Contact" },
  { href: "/press", label: "Press" },
  { href: "https://thestrangeseeds.bandcamp.com/merch", label: "Store", external: true },
];

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed top-0 left-0 w-screen bg-black bg-opacity-90 shadow-md flex flex-col items-center space-y-6 py-6 z-50">
      {navigationLinks.map((link, index) => (
        link.external ? (
          <a
            key={index}
            href={link.href}
            className="w-full text-center hover:text-red-500 px-6 py-3 hover:bg-gray-800 text-xl font-semibold transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={index}
            href={link.href}
            className="w-full text-center hover:text-red-500 px-6 py-3 hover:bg-gray-800 text-xl font-semibold transition-colors duration-200"
            onClick={onClose}
          >
            {link.label}
          </Link>
        )
      ))}
    </div>
  );
}

