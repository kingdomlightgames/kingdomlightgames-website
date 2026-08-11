import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kingdom Light Games",
  description: "Building an online trading card business one collection at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">

        {/* Global Sticky Navigation */}
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/70 backdrop-blur">
  <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <Image
        src="/KingdomLight Games.png"
        alt="Kingdom Light Games Logo"
        width={40}
        height={40}
        className="rounded-md"
      />
      <span className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-200">
        Kingdom Light Games
      </span>
    </div>

    <nav className="hidden sm:flex gap-6 text-xs tracking-wide text-neutral-400">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <Link href="/about" className="hover:text-white transition-colors">About</Link>
      <Link href="/#inventory" className="hover:text-white transition-colors">Inventory</Link>
      <Link href="/#journey" className="hover:text-white transition-colors">Journey</Link>
      <Link href="https://www.youtube.com/@KingdomLightGames" target="_blank" className="hover:text-white transition-colors">
        YouTube
      </Link>
    </nav>
  </div>
</header>

        {/* Page Content */}
        <main className="flex-1">{children}</main>

      </body>
    </html>
  );
}
