import type { Metadata } from "next";
import { Rubik_Mono_One, Rubik_Dirt, Rubik } from "next/font/google";
import "./globals.css";

const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-mono-one",
});

const rubikDirt = Rubik_Dirt({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-dirt",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Strange Seeds",
  description: "Official website of Strange Seeds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubikMonoOne.variable} ${rubikDirt.variable} ${rubik.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
