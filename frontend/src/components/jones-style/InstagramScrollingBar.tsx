"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function InstagramScrollingBar() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`bg-[#8B2E26] w-full overflow-hidden py-4 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Repeat the text multiple times for seamless scrolling */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-chunky text-2xl md:text-3xl lg:text-4xl text-white mx-8 inline-block"
              style={{
                fontFamily: 'Anton',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              FOLLOW US ON INSTAGRAM @TACOBELLASATX
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl mx-4">📷</span>
          </span>
        ))}
      </div>
    </section>
  );
}
