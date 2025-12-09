"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { foodTruck } from "@/config/foodTruck.config";
import Link from "next/link";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Hours", href: "#hours" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export function InstaHeader() {
  const { name, instagramHandle, instagramUrl } = foodTruck;

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#2a2a2a]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 ring-2 ring-[#FF6B00]">
            <AvatarImage src="/images/taco-bellas-logo.png" alt={name} />
            <AvatarFallback className="bg-[#FF6B00] text-white font-chunky text-sm">
              TB
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-chunky text-lg text-white leading-tight">{name}</h1>
            <Link 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-[#a0a0a0] hover:text-[#FF6B00] transition-colors"
            >
              {instagramHandle}
            </Link>
          </div>
        </div>

        {/* Right: Nav Links */}
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-chunky text-[#a0a0a0] hover:text-[#FF6B00] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

