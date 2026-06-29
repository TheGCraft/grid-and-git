import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'TheGCraft | Grid & Git',
  description: 'The Portfolio of a Web Operations Specialist and Designer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="antialiased bg-white text-gray-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
        <Navbar />
        <main>{children}
        </main>
        <footer className="border-t border-gray-100 py-10 px-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TheGCraft. Built with Grid & Git philosophy.
        </footer>
      </body>
    </html>
  );
}
