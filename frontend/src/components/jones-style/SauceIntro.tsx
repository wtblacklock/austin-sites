"use client";

import Image from "next/image";
import { useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

export function SauceIntro() {
  const { ref, isVisible, staggerDelay } = useStaggeredScrollAnimation(0.15);
  
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-[#F1E7DA] w-full">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-0 items-center min-h-[400px] md:min-h-[600px]">
          {/* Image - 50% left, full height, no padding */}
          <div 
            className={`relative w-full h-full min-h-[400px] md:min-h-[600px] overflow-hidden flex items-center stagger-item ${isVisible ? 'stagger-visible' : ''}`}
            style={{
              transitionDelay: '0s',
              animationDelay: '0s'
            }}
          >
            <Image
              src="/images/bella.webp"
              alt="Taco Bella's Trailer"
              fill
              className="object-cover"
            />
          </div>

          {/* Text - 50% right */}
          <div className="text-left px-[60px] py-8 md:py-16 flex flex-col justify-center">
            <h2 
              className={`font-chunky block stagger-item ${isVisible ? 'stagger-visible' : ''}`}
              style={{
                color: 'rgb(219, 68, 57)',
                fontFamily: 'Anton',
                fontSize: '82.24px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '82.24px',
                letterSpacing: 'normal',
                marginBottom: '30px',
                height: 'auto',
                transitionDelay: `${staggerDelay * 1}s`,
                animationDelay: `${staggerDelay * 1}s`
              }}
            >
              OUR STORY
            </h2>
            <p 
              className={`text-lg md:text-xl text-black mb-6 leading-relaxed stagger-item ${isVisible ? 'stagger-visible' : ''}`}
              style={{ 
                marginTop: '0',
                transitionDelay: `${staggerDelay * 2}s`,
                animationDelay: `${staggerDelay * 2}s`
              }}
            >
              Taco Bella's is a beloved taco trailer in South Austin that specializes in serving delicious breakfast tacos and authentic street tacos. Our tacos are made with fresh, locally sourced ingredients and perfectly seasoned, ensuring each bite is packed with flavor.
            </p>
            <p 
              className={`text-lg md:text-xl text-black leading-relaxed stagger-item ${isVisible ? 'stagger-visible' : ''}`}
              style={{
                transitionDelay: `${staggerDelay * 3}s`,
                animationDelay: `${staggerDelay * 3}s`
              }}
            >
              Whether you're craving a classic bacon, egg & cheese breakfast taco or something more adventurous like our pastor tacos with fresh cilantro and onion, Taco Bella's has something for everyone. With friendly service and a cozy trailer vibe, we're the perfect spot to grab delicious tacos with friends and family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

