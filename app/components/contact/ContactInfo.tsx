export default function ContactInfo() {
  return (
    <div className="md:w-2/3 lg:w-1/2 mx-auto bg-background p-6 rounded-lg shadow-lg border-white border-opacity-20 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-6">Booking</h2>
      
      <h3 className="text-2xl font-semibold mb-2">EMAIL</h3>
      <p><a href="mailto:info@thestrangeseeds.com" className="text-foreground underline text-xl">info@thestrangeseeds.com</a></p>
      
      <h3 className="text-2xl font-semibold mt-4 mb-2">INQUIRIES</h3>
      <p className="text-xl"> <a href="tel:+491703562558" className="text-foreground underline">Patrick: +49 (0) 170 356 255 8</a></p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-8">
        <a href="/downloads/strange_seeds_presskit_en.pdf" className="text-foreground underline text-xl hover:text-gray-300 transition-colors">
          ELECTRONIC PRESS KIT<br />(ENGLISH)
        </a>
        <a href="/downloads/strange_seeds_presskit_de.pdf" className="text-foreground underline text-xl hover:text-gray-300 transition-colors">
          ELECTRONIC PRESS KIT<br />(DEUTSCH)
        </a>
      </div>
      
      <a href="/downloads/strange_seeds_tech_rider.pdf" className="mt-6 text-foreground underline text-xl hover:text-gray-300 transition-colors">
        TECH RIDER
      </a>
    </div>
  );
}
