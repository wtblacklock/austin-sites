"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { foodTruck } from "@/config/foodTruck.config";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "The Vibe", href: "#vibe" },
  { label: "Find Us", href: "#location" },
  { label: "Our Fans", href: "#testimonials" },
  { label: "Catering", href: "#catering" },
];

export function NavMinimal() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FF000D]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-grid py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/bt_logo.png"
            alt={foodTruck.name}
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="font-chunky text-2xl text-white bg-[#FF000D] px-3 py-1">
            {foodTruck.name}
          </span>
        </Link>

        {/* Nav Links - Desktop only, no mobile menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-white hover:text-white/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Social Media Icons */}
          <Link
            href="https://www.facebook.com/tacobellas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#FFDD00] transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
          <Link
            href={foodTruck.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#FFDD00] transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
          
          {/* Order Ahead Button - Yellow, hidden on tablet/mobile (only shows on lg+) */}
          <Link
            href="tel:512-740-2289"
            className="hidden lg:inline-flex items-center gap-2 bg-[#FFDD00] text-[#FF000D] px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-[#FFE433] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Order Ahead
          </Link>
        </div>
      </div>
    </nav>
  );
}
