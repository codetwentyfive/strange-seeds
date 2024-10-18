import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="absolute top-16 left-0 w-full bg-background shadow-md flex flex-col items-center space-y-4 py-4">
      <Link href="/" className="w-full text-center">Home</Link>
      <Link href="/gigs" className="w-full text-center">Upcoming Gigs</Link>
      <Link href="/merch" className="w-full text-center">Merch</Link>
      <Link href="/music" className="w-full text-center">Music</Link>
      <Link href="/about" className="w-full text-center">About</Link>
      <Link href="/contact" className="w-full text-center">Contact</Link>
    </div>
  );
}
