import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

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
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="relative z-50 border-b border-black/70 bg-black py-6">
            <div className="container mx-auto flex justify-center px-6 py-6">
              <Link href="/" className="relative inline-flex items-center">
                <Image
                  src="/third-place-logo.svg"
                  alt="Third Place"
                  width={520}
                  height={160}
                  priority
                  className="relative"
                />
              </Link>
            </div>
          </header>
          <div className="flex-1">{children}</div>
          <footer className="mt-16 bg-black py-12" />
        </div>
      </body>
    </html>
  );
}
