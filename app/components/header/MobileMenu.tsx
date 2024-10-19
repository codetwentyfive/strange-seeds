import Link from "next/link";

interface MobileMenuProps {
  onClose: () => void;
}

const navigationLinks = [
  { href: "/gigs", label: "Gigs" },
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" },
  { href: "/press", label: "Press" },
  { href: "https://thestrangeseeds.bandcamp.com/merch", label: "Store", external: true },
];

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed top-16 left-0 w-screen bg-black bg-opacity-90 shadow-md flex flex-col items-center space-y-4 py-4 z-50">
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="w-full text-center text-white hover:text-gray-300 text-lg"
          target={link.external ? "_blank" : "_self"}
          rel={link.external ? "noopener noreferrer" : undefined}
          onClick={onClose}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
