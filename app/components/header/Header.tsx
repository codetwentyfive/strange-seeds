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
    <header className="flex justify-between items-center p-4 bg-background shadow">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={150} height={50} />
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="/gigs" className="text-gray-700 hover:text-gray-900">Gigs</Link>
        <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
        <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
      </nav>
      <button
        className="md:hidden text-gray-700 hover:text-gray-900"
        onClick={toggleMenu}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      {isMenuOpen && <MobileMenu />}
    </header>
  );
}
