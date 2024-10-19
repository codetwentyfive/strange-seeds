export default function ContactInfo() {
  return (
    <div className="md:w-2/3 lg:w-1/2 mx-auto bg-background p-6 rounded-lg shadow-lg border-white border-opacity-20 flex flex-col items-center">
      <h3 className="text-3xl font-bold mb-2">Email</h3>
      <p><a href="mailto:info@thestrangeseeds.com" className="text-foreground underline text-xl">info@thestrangeseeds.com</a></p>
      <h3 className="text-3xl font-bold mt-8 mb-2">Telephone</h3>
      <p className="mt-2 text-xl">Patrick Knödlseder</p>
      <p><a href="tel:+49(0)1703562558" className="text-foreground underline text-xl">+49 (0) 170 356 255 8</a></p>
    </div>
  );
}
