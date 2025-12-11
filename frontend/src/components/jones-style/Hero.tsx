"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { bbq } from "@/config/bbq.config";
import { VideoModal } from "../restaurant/VideoModal";

export function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heartsVisible, setHeartsVisible] = useState(false);

  useEffect(() => {
    // Animate in on load
    setIsLoaded(true);
    // Reveal hearts quickly after a short delay
    const heartsTimer = setTimeout(() => {
      setHeartsVisible(true);
    }, 100);
    
    return () => clearTimeout(heartsTimer);
  }, []);

  // Generate heart configurations with random sizes (40-120px) - evenly spaced across whole background
  const heartSizes = [65, 95, 55, 110, 75, 88, 60, 105, 70, 82, 80, 98, 65, 85, 115];
  // Evenly distributed horizontally across full width (0-100%) - systematic spacing
  const heartPositions = [8, 20, 32, 44, 56, 68, 80, 92, 14, 26, 38, 50, 62, 74, 86];
  // Evenly distributed vertically across full height (0-100%) - systematic spacing from top to bottom
  const heartVerticalPositions = [5, 15, 25, 35, 45, 55, 65, 75, 85, 10, 20, 30, 40, 50, 60];
  
  // Additional hearts for the bottom of the hero section - evenly spaced
  const bottomHeartSizes = [75, 100, 60, 85, 70, 95];
  const bottomHeartPositions = [18, 36, 54, 72, 90, 27];
  const bottomHeartVerticalPositions = [80, 82, 84, 86, 88, 90];

  return (
    <>
      <section className={`bg-[#db4439] pb-16 md:pb-24 w-full pt-[150px] relative overflow-hidden scroll-fade-in ${isLoaded ? "visible" : ""}`}>
        {/* Animated Hearts Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => {
            const size = heartSizes[i];
            const leftPosition = heartPositions[i];
            const topPosition = heartVerticalPositions[i];
            const animationClass = `animate-heart-float-${(i % 6) + 1}`;
            const delay = i * 0.3;
            // First hearts have less opacity, gradually increasing
            const opacity = i < 5 ? 0.06 : i < 10 ? 0.09 : 0.12;
            
            return (
              <div
                key={i}
                className={`absolute ${animationClass}`}
                style={{
                  left: `${leftPosition}%`,
                  top: `${topPosition}%`,
                  animationDelay: `${delay}s`,
                  opacity: heartsVisible ? opacity : 0,
                  transition: `opacity 0.3s ease-out ${i * 0.04}s`
                }}
              >
                <svg width={size} height={size} viewBox="0 0 24 24" fill="#1a1a1a" opacity={1}>
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            );
          })}
          
          {/* Additional hearts at the bottom of the hero section */}
          {Array.from({ length: 6 }).map((_, i) => {
            const size = bottomHeartSizes[i];
            const leftPosition = bottomHeartPositions[i];
            const topPosition = bottomHeartVerticalPositions[i];
            const animationClass = `animate-heart-float-${(i % 6) + 1}`;
            const delay = (i + 15) * 0.3;
            // First bottom hearts have less opacity
            const opacity = i < 2 ? 0.06 : i < 4 ? 0.09 : 0.12;
            
            return (
              <div
                key={`bottom-${i}`}
                className={`absolute ${animationClass}`}
                style={{
                  left: `${leftPosition}%`,
                  top: `${topPosition}%`,
                  animationDelay: `${delay}s`,
                  opacity: heartsVisible ? opacity : 0,
                  transition: `opacity 0.3s ease-out ${(i + 15) * 0.04}s`
                }}
              >
                <svg width={size} height={size} viewBox="0 0 24 24" fill="#1a1a1a" opacity={1}>
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            );
          })}
        </div>
        <div className="w-full relative z-10">
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
            {/* Text Content */}
            <div className="text-left px-[60px]">
              <h1 
                className="font-chunky mb-6 block"
                style={{
                  color: 'rgb(241, 232, 219)',
                  fontFamily: 'Anton',
                  fontSize: 'clamp(40px, 8vw, 119.334px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'clamp(38px, 7.5vw, 114.943px)',
                  letterSpacing: 'normal'
                }}
              >
                From South Austin to All of Austin's Hearts
              </h1>
            </div>

            {/* TikTok Video Thumbnail with Play Button */}
            <button
              onClick={() => setVideoModalOpen(true)}
              className="relative transition-all duration-300 group inline-block active:scale-95"
              style={{ 
                transform: 'rotate(10deg)',
                filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.3))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(10deg) scale(1.05)';
                e.currentTarget.style.filter = 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.4))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(10deg) scale(1)';
                e.currentTarget.style.filter = 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.3))';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'rotate(10deg) scale(0.95)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'rotate(10deg) scale(1.05)';
              }}
            >
              <div className="relative w-[293px] h-[541px] overflow-hidden">
                <Image
                  src="/images/tiktok-hero.png"
                  alt="Watch TikTok Video"
                  fill
                  className="object-cover"
                  style={{
                    clipPath: 'inset(5px)'
                  }}
                  priority
                  key="tiktok-hero-updated"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center transition-colors bg-black/20 group-hover:bg-black/30">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <svg 
                      className="w-10 h-10 text-[#db4439] ml-1" 
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
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl="https://www.tiktok.com/embed/v2/7447574236547419438"
      />
    </>
  );
}

