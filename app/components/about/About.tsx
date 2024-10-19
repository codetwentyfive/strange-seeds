import Image from "next/image";

export default function About() {
  return (
    <section className="pt-32 pb-12 mt-16 bg-background flex flex-col md:flex-row items-center max-w-4xl mx-auto lg:pt-32">
      <div className="md:w-1/2">
        <Image src="/images/about-2.jpeg" alt="Band Photo" width={500} height={500} className="rounded shadow" />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
        <h2 className="text-2xl font-bold mb-4 text-center">About The Strange Seeds</h2>
        <p className="text-gray-700 text-pretty text-lg text-center">
          In a dimly lit old tabbaco factory, The Strange Seeds stumbled upon a 
          forgotten synthesizer that unleashed otherworldly frequencies.
          <br />
          Harnessing this sonic alchemy, they crafted a sound that 
          transcended genres and captivated listeners worldwide. 
        </p>
      </div>
    </section>
  );
}
