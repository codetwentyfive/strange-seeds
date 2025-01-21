import { Rubik_Mono_One, Rubik_Dirt, Rubik } from "next/font/google";
import "./globals.css";
import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"

const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-mono-one",
  display: "swap",
});

const rubikDirt = Rubik_Dirt({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-dirt",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thestrangeseeds.com'),
  title: "The Strange Seeds | Official Website",
  description: "Official website of the band The Strange Seeds. Discover our music, upcoming gigs, and merch.",
  keywords: "The Strange Seeds, band, music, rock, gigs, concerts, merch",
  openGraph: {
    title: "The Strange Seeds | Official Website",
    description: "Official website of the band The Strange Seeds. Discover our music, upcoming gigs, and merch.",
    url: "https://www.thestrangeseeds.com",
    siteName: "The Strange Seeds",
    images: [
      {
        url: "https://www.thestrangeseeds.com/images/twitter-image.webp",
        width: 1200,
        height: 630,
        alt: "The Strange Seeds Band",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Strange Seeds | Official Website",
    description: "Official website of the band The Strange Seeds. Discover our music, upcoming gigs, and merch.",
    images: ["https://www.thestrangeseeds.com/images/twitter-image.webp"],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  themeColor: "#0a0a0a",
  alternates: {
    canonical: "https://www.thestrangeseeds.com",
  },
  authors: [{ name: 'The Strange Seeds' }],
  verification: {
    google: 'google47c345b6949ecceb',
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: 'The Strange Seeds',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'The Strange Seeds',
  },
  other: {
    'google-site-verification': 'google47c345b6949ecceb',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
      </head>
      <body className={`${rubikMonoOne.variable} ${rubikDirt.variable} ${rubik.variable} font-sans antialiased bg-background text-foreground`}>
        <div 
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: 'url("/images/bg-texture.webp")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            opacity: 0.1,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
