'use client';

import Link from 'next/link';
import { NavigationItem } from '@/types/strapi';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

interface HeaderProps {
  navigation: NavigationItem[];
  siteName?: string;
}

export default function Header({ navigation, siteName = 'Business Name' }: HeaderProps) {
  return (
    <header className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.slug}
                  target={item.openInNewTab ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          {siteName}
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                href={item.slug}
                target={item.openInNewTab ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - Theme & CTA */}
      <div className="navbar-end gap-2">
        <ThemeSwitcher />
        <Link href="/contact" className="btn btn-primary">
          Contact Us
        </Link>
      </div>
    </header>
  );
}
