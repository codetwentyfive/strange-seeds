'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaAmazon,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerHeight = isHomePage ? Math.max(64, window.innerHeight - scrollY) : 64;
  const isScrolled = scrollY > 50;

  const socialLinks = [
    {
      icon: FaSpotify,
      href: "https://open.spotify.com/artist/1vSVbOqYbg9UA1AaOALKab?si=uTkNfn3YRaKGe2xSkZlBsw",
      label: "Spotify",
    },
    {
      icon: FaApple,
      href: "https://music.apple.com/us/artist/thestrangeseeds/1586917108",
      label: "Apple Music",
    },
    {
      icon: FaAmazon,
      href: "https://music.amazon.com/artists/B0D8RM4BB6/thestrangeseeds",
      label: "Amazon",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCC5AEweKnvMIHgxrVcLFsRg/featured",
      label: "YouTube",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/thestrangeseeds",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/thestrangeseeds",
      label: "Facebook",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@thestrangeseeds",
      label: "TikTok",
    },
  ];

  const navigationLinks = [
    { href: "/gigs", label: "Gigs" },
    { href: "/music", label: "Music" },
    { href: "/contact", label: "Contact" },
    { href: "/press", label: "Press" },
    { href: "https://merch.thestrangeseeds.com/", label: "Store", external: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
        isScrolled ? 'z-10 h-16' : 'z-50'
      }`}
      style={{ height: isScrolled ? '64px' : `${headerHeight}px` }}
    >
      {isHomePage && (
        <div 
          className="absolute inset-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isScrolled ? 0 : 1 }}
        >
          <Image
            src="/images/band.jpg"
            alt="Band Background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "top" }}
            quality={100}
            priority
            className="sm:object-contain"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center w-full p-4 bg-transparent">
          {/* Band Logo */}
          <Link href="/" className="flex-shrink-0 pl-5">
            <Image
              src="/icons/logo-icon.png"
              alt="Band Logo"
              width={90}
              height={90}
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white hover:text-gray-300 text-lg font-semibold transition-colors duration-300"
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-white hover:text-gray-300"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}

        {isHomePage && !isScrolled && (
          <div className="flex-grow flex flex-col items-center justify-center pb-8">
            <Image
              src="/icons/band-name.png"
              alt="Band Name"
              width={300}
              height={100}
              className="mb-8 filter invert transition-all duration-500 hover:animate-bounce"
            />
            <div className="flex justify-center space-x-6 mt-[18rem]">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white hover:text-red-500 transform hover:scale-110 transition-all duration-300"
                >
                  <Icon size={60} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
