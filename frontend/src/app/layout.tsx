import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getNavigation, getSiteSettings } from "@/lib/strapi";

const inter = Inter({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  
  return {
    title: settings?.siteTitle || "Business Name",
    description: settings?.siteDescription || "Welcome to our business",
  };
}

// Default navigation for when Strapi is not available
const defaultNavigation = [
  { id: 1, documentId: '1', title: 'Home', slug: '/', order: 0, isExternal: false, openInNewTab: false },
  { id: 2, documentId: '2', title: 'Services', slug: '/services', order: 1, isExternal: false, openInNewTab: false },
  { id: 3, documentId: '3', title: 'Blog', slug: '/blog', order: 2, isExternal: false, openInNewTab: false },
  { id: 4, documentId: '4', title: 'About', slug: '/about', order: 3, isExternal: false, openInNewTab: false },
  { id: 5, documentId: '5', title: 'Contact', slug: '/contact', order: 4, isExternal: false, openInNewTab: false },
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
    <html lang="en" data-theme="corporate">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header 
          navigation={navItems} 
          siteName={settings?.siteName || "Business Name"} 
        />
        <main className="flex-1">
          {children}
        </main>
        <Footer
          navigation={navItems}
          siteName={settings?.siteName || "Business Name"}
          copyrightText={settings?.copyrightText}
          footerText={settings?.footerText}
        />
      </body>
    </html>
  );
}
