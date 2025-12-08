"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { foodTruck } from "@/config/foodTruck.config";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "The Vibe", href: "#vibe" },
  { label: "Find Us", href: "#location" },
  { label: "Instagram", href: foodTruck.instagramUrl, external: true },
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
        {/* Logo with red background */}
        <Link
          href="/"
          className="font-chunky text-2xl"
        >
          <span className="bg-[#FF000D] text-white px-3 py-1">
            {foodTruck.name}
          </span>
        </Link>

        {/* Nav Links - Desktop only, no mobile menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm font-semibold uppercase tracking-wide text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              {link.label}
              {link.external && <span className="text-xs">↗</span>}
            </Link>
          ))}
          
          {/* Order Ahead Button - Yellow, hidden on tablet/mobile (only shows on lg+) */}
          <Link
            href="https://www.doordash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-[#FFDD00] text-[#FF000D] px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-[#FFE433] transition-colors"
          >
            Order Ahead
          </Link>
        </div>
      </div>
    </nav>
  );
}
