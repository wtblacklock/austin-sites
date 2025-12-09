"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { VideoModal } from "@/components/restaurant/VideoModal";

interface FloatingTikTokWidgetProps {
  videoUrl: string;
  thumbnailSrc: string;
}

export function FloatingTikTokWidget({ videoUrl, thumbnailSrc }: FloatingTikTokWidgetProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
            aria-label="Close TikTok widget"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* TikTok Thumbnail with Play Button */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="block hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
          >
            <div className="relative w-32 md:w-44 lg:w-56 aspect-[9/16]">
              <Image
                src={thumbnailSrc}
                alt="Watch TikTok Video"
                fill
                className="object-cover scale-[1.024]"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center transition-colors">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 md:w-8 md:h-8 text-[#FF000D] ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
}

