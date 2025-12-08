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
    title: settings?.siteTitle || "Taco Bella's",
    description: settings?.siteDescription || "South Austin's favorite taco trailer",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navigation, settings] = await Promise.all([
    getNavigation(),
    getSiteSettings(),
  ]);

  return (
    <html lang="en" data-theme={settings?.theme || "corporate"}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header 
          navigation={navigation} 
          siteName={settings?.siteName || "Taco Bella's"} 
        />
        <main className="flex-1">
          {children}
        </main>
        <Footer
          navigation={navigation}
          siteName={settings?.siteName || "Taco Bella's"}
          copyrightText={settings?.copyrightText}
          footerText={settings?.footerText}
        />
      </body>
    </html>
  );
}
