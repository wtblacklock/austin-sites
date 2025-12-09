"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  avatar?: string;
  role?: string;
}

export function AnimatedTestimonials({
  testimonials,
  className,
}: {
  testimonials: Testimonial[];
  className?: string;
}) {
  // On mobile/tablet: show 4, on desktop: show 9
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9); // Default to desktop count

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setVisibleCount(mobile ? 4 : 9);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = testimonials.length > visibleCount;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 9, testimonials.length));
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleTestimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (idx % 9) * 0.05 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 blur transition duration-500 group-hover:opacity-20" />
            <div className="relative rounded-3xl border border-orange-600 bg-gradient-to-br from-orange-500 to-orange-600 p-8 shadow-sm hover:shadow-xl transition-shadow h-full flex flex-col">
              {/* Quote icon */}
              <svg
                className="mb-6 h-10 w-10 text-white"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
              </svg>

              <p className="mb-8 text-lg text-white leading-relaxed flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 mt-auto">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border-2 border-white"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-orange-600">
                    {testimonial.author.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-white/80">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={loadMore}
            className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-white px-8 py-4 text-base font-semibold text-orange-600 transition-all hover:bg-orange-50 hover:shadow-lg"
          >
            Load More
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export function TestimonialMarquee({
  testimonials,
  className,
}: {
  testimonials: Testimonial[];
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />
      
      <motion.div
        className="flex gap-6"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, idx) => (
          <div
            key={idx}
            className="w-80 flex-shrink-0 rounded-xl border border-white/10 bg-zinc-900/50 p-6"
          >
            <p className="mb-4 text-sm text-zinc-400 line-clamp-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="text-sm font-medium text-white">— {testimonial.author}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

