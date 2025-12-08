"use client";

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
  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {testimonials.map((testimonial, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 blur transition duration-500 group-hover:opacity-30" />
          <div className="relative rounded-2xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur-sm">
            {/* Quote icon */}
            <svg
              className="mb-4 h-8 w-8 text-green-500/50"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
            </svg>

            <p className="mb-6 text-zinc-300 leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              {testimonial.avatar ? (
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-lg font-bold text-white">
                  {testimonial.author.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
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

