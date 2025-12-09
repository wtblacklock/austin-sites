"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageModal } from "@/components/ui/ImageModal";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GallerySliderProps {
  images: GalleryImage[];
  className?: string;
}

export function GallerySlider({ images, className }: GallerySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Split images into top and bottom rows
  const topRowImages = images.filter((_, index) => index % 2 === 0);
  const bottomRowImages = images.filter((_, index) => index % 2 === 1);

  // Auto-advance slides every 10 seconds (slowed down significantly)
  useEffect(() => {
    if (!isAutoPlaying || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(topRowImages.length, bottomRowImages.length));
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, topRowImages.length, bottomRowImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleImages = (rowImages: GalleryImage[], reverse: boolean = false) => {
    // On mobile/tablet: show 2 images per row (2 columns), on desktop: 4 images
    const visibleCount = isMobile ? 2 : 4;
    const totalImages = rowImages.length;
    
    if (totalImages === 0) return [];
    
    const indices = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (currentIndex + i) % totalImages;
      indices.push(idx);
    }
    
    if (reverse) indices.reverse();
    
    return indices.map(idx => ({ ...rowImages[idx], index: idx }));
  };

  const visibleTopImages = getVisibleImages(topRowImages);
  const visibleBottomImages = getVisibleImages(bottomRowImages, true);

  const maxSlides = Math.max(topRowImages.length, bottomRowImages.length);

  return (
    <div className={cn("relative w-full px-6", className)}>
      {/* Top Row */}
      <div className="mb-6 overflow-hidden">
        <div className="flex gap-4 w-full">
          <AnimatePresence mode="wait">
            {visibleTopImages.map((imageData, idx) => (
              <motion.div
                key={`top-${currentIndex}-${idx}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative flex-shrink-0 w-[calc(50%-0.75rem)] lg:w-[calc(25%-0.75rem)] aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedImage({ src: imageData.src, alt: imageData.alt })}
              >
                <Image
                  src={imageData.src}
                  alt={imageData.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mb-12 overflow-hidden">
        <div className="flex gap-4 justify-end w-full">
          <AnimatePresence mode="wait">
            {visibleBottomImages.map((imageData, idx) => (
              <motion.div
                key={`bottom-${currentIndex}-${idx}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative flex-shrink-0 w-[calc(50%-0.75rem)] lg:w-[calc(25%-0.75rem)] aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedImage({ src: imageData.src, alt: imageData.alt })}
              >
                <Image
                  src={imageData.src}
                  alt={imageData.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: maxSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "w-8 bg-orange-500"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="mt-4 text-center text-sm text-gray-500">
        {currentIndex + 1} / {maxSlides}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </div>
  );
}

