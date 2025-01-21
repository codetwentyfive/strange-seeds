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
          <div className="text-sm text-gray-400">
          Developed by{" "}
          <Link 
            href="https://chingis.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:via-green-500 hover:via-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
          >
            Chingis Zwecker E.
          </Link>
        </div>
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

