import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} The Strange Seeds. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link 
              href="/imprint" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link 
              href="/privacy" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

