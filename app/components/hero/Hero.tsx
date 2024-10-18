import Image from "next/image";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <Image
        src="/images/band.jpg"
        alt="Band Background"
        layout="fill"
        objectFit="contain"
        className="z-0"
      />
      <div className="absolute z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Strange Seeds</h1>
        <Image src="/images/logo.png" alt="Band Logo" width={300} height={100} />
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
            <FaInstagram size={30} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
            <FaFacebook size={30} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
            <FaTiktok size={30} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
            <FaYoutube size={30} />
          </a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
            <FaSpotify size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

