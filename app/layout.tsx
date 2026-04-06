import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taifa Bridge Group - Software Development",
  description: "Building innovative software solutions for people",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

import NavbarClient from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-to-b from-red-900 via-red-800 to-amber-900 text-gray-100">
        <NavbarClient />

        <main>{children}</main>

        <footer className="bg-red-950 border-t border-yellow-600 mt-16 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm sm:text-base">
            <p>© 2026 Taifa Bridge Group. Building bridges in software.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
