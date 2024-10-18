import Link from "next/link";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed top-16 left-0 w-screen bg-black bg-opacity-90 shadow-md flex flex-col items-center space-y-4 py-4 z-50">
      <Link href="/" className="w-full text-center text-white hover:text-gray-300" onClick={onClose}>Home</Link>
      <Link href="/gigs" className="w-full text-center text-white hover:text-gray-300" onClick={onClose}>Upcoming Gigs</Link>
      <Link href="/merch" className="w-full text-center text-white hover:text-gray-300" onClick={onClose}>Merch</Link>
      <Link href="/music" className="w-full text-center text-white hover:text-gray-300" onClick={onClose}>Music</Link>
      <Link href="/about" className="w-full text-center text-white hover:text-gray-300" onClick={onClose}>About</Link>
      <Link href="/contact" className="w-full text-center text-white hover:text-gray-300" onClick={onClose}>Contact</Link>
    </div>
  );
}
