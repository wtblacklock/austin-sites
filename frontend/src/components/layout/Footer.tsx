import Link from 'next/link';
import { NavigationItem } from '@/types/strapi';

interface FooterProps {
  navigation: NavigationItem[];
  siteName?: string;
  copyrightText?: string;
  footerText?: string;
}

export default function Footer({
  navigation,
  siteName = 'Austin Sites',
  copyrightText,
  footerText,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              {siteName}
            </Link>
            {footerText && (
              <p className="mt-4 text-stone-400 leading-relaxed">{footerText}</p>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.slug}
                    target={item.openInNewTab ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-500">
          <p>
            {copyrightText || `© ${currentYear} ${siteName}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}

