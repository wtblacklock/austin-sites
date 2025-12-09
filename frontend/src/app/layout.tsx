import type { Metadata } from "next";
import { Nunito_Sans, Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { foodTruck } from "@/config/foodTruck.config";

// Body font
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

// Button font
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-button",
});

// Note: Ultra is not available in next/font/google, using a similar serif display font
// Or we can load it via <link> in the head
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ultra&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${nunitoSans.variable} ${archivo.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-body), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
