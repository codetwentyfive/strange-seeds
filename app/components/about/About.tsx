import Image from "next/image";

export default function About() {
  return (
    <section className="py-12 bg-background flex flex-col md:flex-row items-center max-w-4xl mx-auto">
      <div className="md:w-1/2">
        <Image src="/images/band-photo.jpg" alt="Band Photo" width={500} height={500} className="rounded shadow" />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
        <h2 className="text-2xl font-bold mb-4">About Chingis</h2>
        <p className="text-gray-700">
          Chingis rides the wind,<br />
          Awesome deeds and charming smiles,<br />
          Ladies by his side.
        </p>
      </div>
    </section>
  );
}
