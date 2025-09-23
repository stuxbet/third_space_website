import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import HamburgerMenu from "@/components/navigation/hamburger-menu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",   // creates a CSS var
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Third Place",
  description: "Join the Third Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} min-h-screen bg-white font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="relative z-50 border-b bg-white/95 backdrop-blur">
            <div className="container mx-auto flex items-center justify-between px-6 py-6">
              <Link href="/" className="text-lg font-semibold text-gray-900">
                Third Place
              </Link>
              <HamburgerMenu />
            </div>
          </header>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
