"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { bbq } from "@/config/bbq.config";
import { useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

export function VisitSection() {
  const { ref, isVisible, staggerDelay } = useStaggeredScrollAnimation(0.15);
  
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="visit" className="bg-[#F1E7DA] w-full">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-0 items-center min-h-[400px] md:min-h-[600px]">
          {/* Text Content */}
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
                transitionDelay: '0s',
                animationDelay: '0s'
              }}
            >
              From the Trailer
            </h2>
            <p 
              className={`text-lg md:text-xl text-black mb-8 leading-relaxed stagger-item ${isVisible ? 'stagger-visible' : ''}`}
              style={{ 
                marginTop: '0',
                transitionDelay: `${staggerDelay * 1}s`,
                animationDelay: `${staggerDelay * 1}s`
              }}
            >
              From crispy bacon & egg breakfast tacos to tender pastor with fresh cilantro and onion — every bite is made to order. Don't miss the migas plate or our famous street taco trio.
            </p>

            <div
              className={`stagger-item ${isVisible ? 'stagger-visible' : ''}`}
              style={{
                transitionDelay: `${staggerDelay * 2}s`,
                animationDelay: `${staggerDelay * 2}s`
              }}
            >
              <Link href={bbq.restaurant.menuCtaHref}>
                <Button
                  className="inline-block text-center uppercase border-0 relative flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgb(219, 68, 57)',
                    color: 'rgb(241, 232, 219)',
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
                  {bbq.restaurant.menuCtaLabel.toUpperCase()}
                </Button>
              </Link>
            </div>
          </div>

          {/* Image - 50% right, full height, no padding */}
          <div 
            className={`relative w-full h-full min-h-[400px] md:min-h-[600px] overflow-hidden flex items-center stagger-item ${isVisible ? 'stagger-visible' : ''}`}
            style={{
              transitionDelay: `${staggerDelay * 1}s`,
              animationDelay: `${staggerDelay * 1}s`
            }}
          >
            <Image
              src={bbq.restaurant.imageUrl}
              alt="BBQ Restaurant"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

