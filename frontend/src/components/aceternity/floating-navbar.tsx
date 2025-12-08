"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export function FloatingNav({
  navItems,
  className,
  logo,
}: {
  navItems: NavItem[];
  className?: string;
  logo?: React.ReactNode;
}) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-4 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white/10 bg-black/80 px-6 py-3 shadow-lg backdrop-blur-md",
          className
        )}
      >
        {logo && <div className="flex-shrink-0">{logo}</div>}
        
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              )}
            >
              {navItem.icon && (
                <span className="block sm:hidden">{navItem.icon}</span>
              )}
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <Link
          href="#location"
          className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Visit Us
        </Link>
      </motion.nav>
    </AnimatePresence>
  );
}

