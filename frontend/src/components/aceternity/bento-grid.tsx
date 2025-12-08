"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "group relative row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl transition duration-200 hover:shadow-2xl hover:border-white/20",
        className
      )}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <div className="mb-2 mt-2 font-bold text-white">
          {title}
        </div>
        <div className="text-sm text-zinc-400">
          {description}
        </div>
      </div>
    </motion.div>
  );
}

export function BentoImageCard({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <p className="text-sm font-medium text-white">{alt}</p>
        </div>
      </div>
    </motion.div>
  );
}

