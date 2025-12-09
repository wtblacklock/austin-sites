"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

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
    <div className={cn("relative min-h-screen overflow-hidden bg-white", className)}>
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Logo - Centered above title */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              rotate: [0, 3, -3, 2, -2, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.1, ease: "easeOut" },
              x: { duration: 0.8, delay: 0.1, ease: "easeOut" },
              rotate: { 
                duration: 8,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1]
              }
            }}
            className="mb-0 mt-[40px] flex justify-center"
          >
            <Image
              src="/images/logo_black.png"
              alt="Taco Bella's Logo"
              width={160}
              height={64}
              className="h-auto w-auto max-w-[160px]"
              priority
            />
          </motion.div>

          {/* Title - Large, bold, playful */}
          <h1 className="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]" style={{ letterSpacing: '0.125rem' }}>
            <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-12 max-w-3xl text-xl text-gray-600 sm:text-2xl leading-relaxed font-bold"
          >
            {(() => {
              const updatedSubtitle = subtitle.replace(/love/gi, (match) => (
                `${match}, Since 2008`
              ));
              const yelpMatch = updatedSubtitle.match(/(4\.6 stars on Yelp with 73\+ reviews\.)/);
              if (yelpMatch) {
                const parts = updatedSubtitle.split(yelpMatch[0]);
                return (
                  <>
                    {parts[0]}
                    <span className="text-orange-500">{yelpMatch[0]}</span>
                    {parts[1]}
                  </>
                );
              }
              return updatedSubtitle;
            })()}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={ctaHref}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-5 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10">{ctaLabel}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-10 py-5 text-lg font-semibold text-gray-700 transition-all hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50"
              >
                {secondaryCtaLabel}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

