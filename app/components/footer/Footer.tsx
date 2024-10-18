import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-4 bg-background text-sm">
      <p>&copy; {new Date().getFullYear()} the Strange Seeds. All rights reserved.</p>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <Link href="/imprint">Imprint</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}

