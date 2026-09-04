import type { Metadata } from "next";
import { Fraunces, Libre_Franklin, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-franklin",
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Strop House — Traditional Barbershop, Dublin",
  description:
    "The Strop House is a traditional barbershop in Dublin 2, run by master barber Eamon Doyle. Classic cuts, straight-razor shaves, and beard work done properly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${franklin.variable} ${plexMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
