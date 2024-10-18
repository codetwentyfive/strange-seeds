'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-transparent">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={150} height={50} />
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="/gigs" className="text-white hover:text-gray-300">Gigs</Link>
        <Link href="/about" className="text-white hover:text-gray-300">About</Link>
        <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
      </nav>
      <button
        className="md:hidden text-white hover:text-gray-300"
        onClick={toggleMenu}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
