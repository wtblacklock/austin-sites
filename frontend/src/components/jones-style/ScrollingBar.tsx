"use client";

import { useEffect, useState } from "react";

export function ScrollingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const staggerDelay = 0.05;
  
  useEffect(() => {
    setMounted(true);
    
    // Trigger animation after 1 second delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Don't render content until mounted to avoid SSR flash
  if (!mounted) {
    return (
      <section data-scrolling-bar className="bg-white w-full overflow-hidden py-4">
        <div className="flex animate-scroll whitespace-nowrap" style={{ minHeight: '60px' }}></div>
      </section>
    );
  }
  
  return (
    <section data-scrolling-bar className="bg-white w-full overflow-hidden py-4">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Repeat the text multiple times for seamless scrolling */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className={`font-chunky text-4xl md:text-5xl lg:text-6xl ml-8 mr-0 inline-block ${isVisible ? 'scrolling-bar-visible' : ''}`}
            style={{
              fontFamily: 'Anton',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: 'clamp(3.24rem, 5.76vw, 5.4rem)',
              transition: isVisible ? `opacity 0.6s ease-out ${i * staggerDelay}s, transform 0.6s ease-out ${i * staggerDelay}s` : 'none',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.8)',
            }}
          >
            TACO ABOUT GOOD FOOD 🔥
          </span>
        ))}
      </div>
    </section>
  );
}

