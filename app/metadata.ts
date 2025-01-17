import { Metadata } from "next";

export const metadata: Metadata = {
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
        url: "https://www.thestrangeseeds.com/images/twitter-image.jpg",
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
    images: ["https://www.thestrangeseeds.com/images/twitter-image.jpg"],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  themeColor: "#0a0a0a",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  alternates: {
    canonical: "https://www.thestrangeseeds.com",
  },
}; 