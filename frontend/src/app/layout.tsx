import type { Metadata } from "next";
import { Changa_One, Nunito, Work_Sans } from "next/font/google";
import "./globals.css";
import { getSiteSettings } from "@/lib/strapi";

const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-headline",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
});

const workSans = Work_Sans({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-button",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  
  return {
    title: settings?.siteTitle || "Taco Bella's",
    description: settings?.siteDescription || "South Austin's favorite taco trailer",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${changaOne.variable} ${workSans.variable} font-body min-h-screen bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
