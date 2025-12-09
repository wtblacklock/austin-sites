import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { foodTruck } from "@/config/foodTruck.config";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: foodTruck.name,
  description: foodTruck.tagline,
  openGraph: {
    title: foodTruck.name,
    description: foodTruck.tagline,
    images: [
      {
        url: '/images/tb_trailer.jpg',
        width: 1200,
        height: 630,
        alt: foodTruck.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: foodTruck.name,
    description: foodTruck.tagline,
    images: ['/images/tb_trailer.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} font-sans bg-[#FF000D] text-white`}>
        {children}
      </body>
    </html>
  );
}
