import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { bbq } from "@/config/bbq.config";

// Body font - Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

// Header font - Anton
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: bbq.name,
  description: bbq.tagline,
  openGraph: {
    title: bbq.name,
    description: bbq.tagline,
    images: [
      {
        url: '/images/tb_trailer.jpg',
        width: 1200,
        height: 630,
        alt: bbq.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: bbq.name,
    description: bbq.tagline,
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
      <body className={`${inter.variable} ${anton.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-body), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
