"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import { bbq } from "@/config/bbq.config";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Newsletter() {
  const { ref, isVisible } = useScrollAnimation();
  
  // Generate taco configurations with random sizes (50-110px)
  const tacoSizes = [65, 52, 78, 58, 85, 72, 60, 95, 68, 82, 55, 88, 62, 75, 70, 58, 80, 65, 72, 90];
  const tacoPositions = [5, 12, 18, 25, 32, 38, 45, 52, 58, 65, 72, 78, 85, 92, 8, 15, 22, 28, 35, 42];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="contact" className={`bg-[#db4439] py-16 md:py-24 w-full relative overflow-hidden scroll-fade-in ${isVisible ? 'visible' : ''}`}>
      {/* Animated Tacos Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => {
          const size = tacoSizes[i];
          const leftPosition = tacoPositions[i];
          const animationClass = `animate-taco-float-${(i % 6) + 1}`;
          const delay = i * 0.3;
          
          return (
            <div
              key={i}
              className={`absolute bottom-0 ${animationClass}`}
              style={{
                left: `${leftPosition}%`,
                animationDelay: `${delay}s`
              }}
            >
              <span
                className="block"
                style={{
                  fontSize: `${size}px`,
                  lineHeight: 1,
                  filter: 'brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(5000%) hue-rotate(350deg) brightness(0.6)',
                  opacity: 0.6
                }}
              >
                🌮
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-full px-[60px] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="font-chunky mb-6"
            style={{
              color: '#F1E7DA',
              fontFamily: 'Anton',
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '1.1',
              letterSpacing: 'normal',
              marginBottom: '24px'
            }}
          >
            Ready to Taste the Best Tacos in South Austin?
          </h2>
          <p 
            className="text-xl md:text-2xl mb-10 leading-relaxed"
            style={{
              color: '#F1E7DA',
              fontFamily: 'Anton',
              fontStyle: 'normal',
              fontWeight: 400,
              marginBottom: '40px'
            }}
          >
            Visit us at 3008 W Slaughter Ln, Austin, TX 78748
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href={bbq.primaryLocation.mapUrl} target="_blank" rel="noopener noreferrer">
              <Button
                className="inline-block text-center uppercase border-0 relative flex items-center justify-center"
                style={{
                  backgroundColor: 'rgb(241, 232, 219)',
                  color: 'rgb(219, 68, 57)',
                  borderRadius: '300px',
                  boxShadow: 'rgb(118, 40, 36) -8px 8px 0px 0px',
                  fontFamily: 'Anton',
                  fontSize: '19.6096px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '0.392192px',
                  paddingTop: '24px',
                  paddingBottom: '24px',
                  paddingLeft: '40.08px',
                  paddingRight: '40.08px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  transition: 'opacity 0.1s linear',
                  WebkitFontSmoothing: 'antialiased',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                GET DIRECTIONS
              </Button>
            </Link>
            <Link href={`tel:${bbq.phone.replace(/\D/g, '')}`}>
              <Button
                className="inline-block text-center uppercase border-0 relative flex items-center justify-center"
                style={{
                  backgroundColor: 'rgb(241, 232, 219)',
                  color: 'rgb(219, 68, 57)',
                  borderRadius: '300px',
                  boxShadow: 'rgb(118, 40, 36) -8px 8px 0px 0px',
                  fontFamily: 'Anton',
                  fontSize: '19.6096px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '0.392192px',
                  paddingTop: '24px',
                  paddingBottom: '24px',
                  paddingLeft: '40.08px',
                  paddingRight: '40.08px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  transition: 'opacity 0.1s linear',
                  WebkitFontSmoothing: 'antialiased',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                CALL US
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

