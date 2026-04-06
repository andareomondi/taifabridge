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
        url: "/logo.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
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
      </body>
    </html>
  );
}
