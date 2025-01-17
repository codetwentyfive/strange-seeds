import Image from "next/image";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-16">
      <div className="w-full aspect-[19/12] overflow-hidden relative">
        <Image
          src="/images/band.jpg"
          alt="Band background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          quality={85}
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT86OjUxNkE3OkVHSkdGNzpLTUpCQkJCQkL/2wBDAR"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Strange Seeds</h1>
        <div className="relative w-64 h-24 sm:w-80 sm:h-28 mx-auto mb-4">
          <Image
            src="/images/logo.png"
            alt="Band Logo"
            fill
            sizes="(max-width: 640px) 256px, 320px"
            style={{ objectFit: "contain" }}
            priority={true}
          />
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          {[
            { icon: FaInstagram, href: "https://instagram.com" },
            { icon: FaFacebook, href: "https://facebook.com" },
            { icon: FaTiktok, href: "https://tiktok.com" },
            { icon: FaYoutube, href: "https://youtube.com" },
            { icon: FaSpotify, href: "https://spotify.com" },
          ].map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 hover:text-red-500 transition"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
