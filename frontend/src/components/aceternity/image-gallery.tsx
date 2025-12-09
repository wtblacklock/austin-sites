"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: Array<{ src: string; alt: string }>;
  className?: string;
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  if (images.length === 0) return null;

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: images.length * 4,
          ease: "linear",
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative flex-shrink-0 w-64 md:w-80 aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

