"use client";

import { useState } from "react";
import { foodTruck } from "@/config/foodTruck.config";
import Image from "next/image";
import Link from "next/link";
import { VideoModal } from "@/components/restaurant/VideoModal";
import { JaggedSeparator } from "@/components/JaggedSeparator";

export function HeroTruck() {
  const { hero } = foodTruck;
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image - Trailer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/images/tb_trailer.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content - Left aligned */}
        <div className="relative z-10 container-grid">
          <div className="max-w-[75%] lg:max-w-[50%]">
            {/* Big chunky title with red background - scaled for mobile */}
            <h1 className="font-chunky text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-10 leading-[1.4]">
              <span className="bg-[#FF000D] px-2 sm:px-3 py-1 sm:py-2" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone', display: 'inline' }}>South Austin's Hidden Gem, That the Whole City Knows.</span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="#location"
                className="inline-block bg-[#FF000D] text-white px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-[#cc000a] transition-colors shadow-xl"
              >
                Come Eat With Us
              </Link>
              <Link
                href="tel:512-740-2289"
                className="hidden lg:inline-flex items-center gap-2 bg-[#FFDD00] text-[#FF000D] px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-[#FFE433] transition-colors shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Order Ahead
              </Link>
            </div>

            {/* TikTok Video Thumbnail - Below buttons on mobile/tablet, floating right on desktop */}
            <div className="mt-6 lg:mt-0 lg:absolute lg:top-auto lg:bottom-20 lg:right-10 lg:z-20 lg:block">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="block hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.7)] lg:mx-0"
              >
                <div className="relative w-32 md:w-44 lg:w-56 aspect-[9/16]">
                  <Image
                    src="/images/tikitok.png"
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
          </div>
        </div>
        
        {/* Animated white separator at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <JaggedSeparator color="#FFFFFF" flipped={false} bgColor="transparent" wavy={true} building={true} clipId="hero-building-clip" />
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
