'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaTiktok,
  FaBandcamp,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(64);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setHeaderHeight(isHomePage ? Math.max(64, window.innerHeight - scrollY) : 64);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isHomePage, scrollY]);

  const isScrolled = scrollY > 50;

  const socialLinks = [
    {
      icon: FaSpotify,
      href: "https://open.spotify.com/artist/3gwMCAZVLTLsYL2SFOXMYR",
      label: "Spotify",
    },
    {
      icon: FaApple,
      href: "https://music.apple.com/us/artist/the-strange-seeds/1542647590",
      label: "Apple Music",
    },
    {
      icon: FaBandcamp,
      href: "https://thestrangeseeds.bandcamp.com/",
      label: "Bandcamp",
    },
    // {
    //   icon: FaAmazon,
    //   href: "https://music.amazon.com/artists/B0D8RM4BB6/thestrangeseeds",
    //   label: "Amazon",
    // },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@thestrangeseeds129",
      label: "YouTube",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/the.strange.seeds/",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/thestrangeseeds",
      label: "Facebook",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@the.strange.seeds",
      label: "TikTok",
    },

  ];

  const navigationLinks = [
    { href: "/gigs", label: "Gigs" },
    { href: "/music", label: "Music" },
    { href: "/contact", label: "Contact" },
    { href: "/press", label: "Press" },
    { href: "https://thestrangeseeds.bandcamp.com/merch", label: "Store", external: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out pb-10 ${
        isScrolled || !isHomePage ? 'z-10 h-16' : 'z-50'
      }`}
      style={{ height: isScrolled || !isHomePage ? '64px' : `${headerHeight}px` }}
    >
      {isHomePage && (
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="hidden sm:block">
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
          </div>
          <div className="block sm:hidden">
            <Image
              src="/images/mobile-background.jpg"
              alt="Mobile Background"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "top" }}
              quality={100}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      )}

      <div className={`relative z-10 flex flex-col h-full`}>
        <div className="flex justify-end items-center w-full p-4 bg-transparent">
          {/* Navigation for larger screens */}
          <nav className="hidden md:flex space-x-4 pr-5">
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
            className={`md:hidden text-black hover:text-gray-700 text-3xl p-2 bg-white rounded-full ${isScrolled || !isHomePage ? 'block' : 'hidden'}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <MobileMenu onClose={() => setIsMenuOpen(false)} />
        )}

        {isHomePage && !isScrolled && (
          <div className="flex-grow flex flex-col items-center justify-center pb-8">
            <Image
              src="/icons/band-name.png"
              alt="Band Name"
              width={300}
              height={100}
              className="mb-8 filter invert transition-all duration-500 hover:animate-bounce sm:mt-0 mt-4"
            />
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8 sm:mt-16 mx-auto px-4 w-full max-w-screen-lg">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white hover:text-red-500 transform hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
