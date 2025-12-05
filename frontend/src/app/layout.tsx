import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getNavigation, getSiteSettings } from "@/lib/strapi";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  
  return {
    title: settings?.siteTitle || "Austin Sites",
    description: settings?.siteDescription || "Welcome to Austin Sites",
  };
}

// Default navigation for when Strapi is not available
const defaultNavigation = [
  { id: 1, documentId: '1', title: 'Home', slug: '/', order: 0, isExternal: false, openInNewTab: false },
  { id: 2, documentId: '2', title: 'Blog', slug: '/blog', order: 1, isExternal: false, openInNewTab: false },
  { id: 3, documentId: '3', title: 'About', slug: '/about', order: 2, isExternal: false, openInNewTab: false },
  { id: 4, documentId: '4', title: 'Contact', slug: '/contact', order: 3, isExternal: false, openInNewTab: false },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navigation, settings] = await Promise.all([
    getNavigation(),
    getSiteSettings(),
  ]);

  const navItems = navigation.length > 0 ? navigation : defaultNavigation;

  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-900`}
      >
        <div className="min-h-screen flex flex-col">
          <Header 
            navigation={navItems} 
            siteName={settings?.siteName || "Austin Sites"} 
          />
          <main className="flex-1">
            {children}
          </main>
          <Footer
            navigation={navItems}
            siteName={settings?.siteName || "Austin Sites"}
            copyrightText={settings?.copyrightText}
            footerText={settings?.footerText}
          />
        </div>
      </body>
    </html>
  );
}
