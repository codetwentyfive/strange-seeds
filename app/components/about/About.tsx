"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/about-1.jpeg",
  "/images/about-2.jpeg",
  "/images/about-3.jpeg",
  "/images/about-4.jpeg",
  "/images/about-5.jpg",
  "/images/about-6.jpg",
  "/images/about-7.JPG",
  "/images/about-8.jpg",
  "/images/about-9.jpg",
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="pt-16 pb-8 mt-24 bg-background flex flex-col items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-24">
      <div className="w-full max-w-md relative aspect-square mb-8 lg:mb-0 lg:max-w-lg">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Band Photo ${index + 1}`}
            fill
            className={`rounded-3xl shadow object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
        <button
          onClick={handlePrevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Previous image"
        >
          &#8249;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Next image"
        >
          &#8250;
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? "bg-white" : "bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-6 lg:mt-8 lg:pl-8">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 text-center">
          About The Strange Seeds
        </h2>
        <p className="font-sans text-pretty text-base sm:text-lg text-center leading-relaxed">
          Formed in 2020 The Strange Seeds, consisting of Jacob James Bryden
          (dr.), Valentin Michetschläger (org.), Patrick Knödlseder (git.) and
          Florian Hackl (voc.,b), deliver steady heavy blues rock out on the
          road . Since their inception, they’ve recorded their debut album
          "Plant", "The Raw Takes"- EP and their second studio album "Grow", to
          be released in early Summer 2024.
          <br /> 
          <br />
          Soundwise, The Strange Seeds merge heavy drum rhythms with thunderlike
          basslines and sweet keys with roaring guitar solos, underscored it all
          with vocals straight from the heart.
          <br />
          <br />
          With more than 80 live gigs under their belt, The Strange Seeds enjoy
          cherishing this sonic amalgamation in tender jam sessions when live on
          stage.
        </p>
      </div>
    </section>
  );
}
