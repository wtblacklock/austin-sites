"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroHighlightProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export function HeroHighlight({
  title,
  subtitle,
  ctaLabel = "Get Started",
  ctaHref = "#",
  secondaryCtaLabel,
  secondaryCtaHref,
  className,
}: HeroHighlightProps) {
  return (
    <div className={cn("relative min-h-screen overflow-hidden", className)}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.3),rgba(0,0,0,0))]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-green-400">Serving Austin Since 2008</span>
          </motion.div>

          {/* Title */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">{title.split(" ")[0]}</span>
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 sm:text-xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link
              href={ctaHref}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
            >
              <span className="relative z-10">{ctaLabel}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                {secondaryCtaLabel}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-zinc-500"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

