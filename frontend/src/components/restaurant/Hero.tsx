"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { foodTruck } from "@/config/foodTruck.config";
import { Button } from "@/components/ui/button";
import { VideoModal } from "./VideoModal";

export function Hero() {
  const { name, tagline } = foodTruck;
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-20 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/images/tb_trailer.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content - Text wrapping around video thumbnail */}
        <div className="relative z-10 text-left px-6 max-w-[1200px] mx-auto w-full">
          {/* TikTok Video Thumbnail - Above text on mobile/tablet, floating right on desktop */}
          <button
            onClick={() => setVideoModalOpen(true)}
            className="block lg:float-right mb-6 lg:ml-6 lg:-mt-[100px] lg:mb-6 hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden group lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
          >
            <div className="relative w-44 md:w-[230px] lg:w-72 aspect-[9/16]">
              <Image
                src="/images/tikitok.png"
                alt="Watch TikTok Video"
                fill
                className="object-cover scale-[1.024]"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center transition-colors">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-[#0a0a0a] ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </button>

          <h1 className="font-chunky text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-10 leading-none">
            From South Austin to <span className="text-[#FF6B00]">All of Austin's Hearts</span> 💕
          </h1>

          <div className="flex">
            <Link href="tel:512-740-2289">
              <Button size={undefined} className="!px-[125px] bg-[#FF6B00] hover:bg-[#FF8533] text-white font-button text-lg py-6 h-auto flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Order Ahead
              </Button>
            </Link>
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
