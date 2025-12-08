import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSiteSettings } from "@/lib/strapi";

const inter = Inter({
  subsets: ["latin"],
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
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
