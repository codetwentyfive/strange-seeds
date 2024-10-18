export default function ContactInfo() {
  return (
    <div className="md:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Management</h3>
      <p>Email: <a href="mailto:management@yourband.com" className="text-foreground underline">management@yourband.com</a></p>
      <h3 className="text-xl font-semibold mt-6 mb-4">Booking</h3>
      <p>Email: <a href="mailto:booking@yourband.com" className="text-foreground underline">booking@yourband.com</a></p>
    </div>
  );
}
