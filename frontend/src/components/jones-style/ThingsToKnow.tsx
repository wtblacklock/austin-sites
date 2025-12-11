"use client";

import Image from "next/image";
import { useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

export function ThingsToKnow() {
  const { ref, isVisible, staggerDelay } = useStaggeredScrollAnimation(0.1);
  const masonryImages = [
    { src: "/images/food-1.webp", alt: "Taco Bella's food", height: "tall" },
    { src: "/images/food-2.webp", alt: "Taco Bella's food", height: "short" },
    { src: "/images/food-3.webp", alt: "Taco Bella's food", height: "short" },
    { src: "/images/food-4.webp", alt: "Taco Bella's food", height: "medium" },
    { src: "/images/food_5.webp", alt: "Taco Bella's food", height: "medium" },
    { src: "/images/food-6.webp", alt: "Taco Bella's food", height: "tall" },
  ];
  const items = [
    {
      title: "Fresh Daily",
      description: "Everything is made fresh every morning. We source local ingredients whenever possible.",
    },
    {
      title: "Family Owned",
      description: "Bella has been serving South Austin for over 16 years. Family recipes, family vibes.",
    },
    {
      title: "Catering",
      description: "Planning a party? We cater! Custom taco trays for office breakfasts, events, and more.",
    },
    {
      title: "Cash & Card",
      description: "We accept all major credit cards and cash. Easy ordering, no hassle.",
    },
    {
      title: "Gas Up & Taco Up",
      description: "Yes, we share a parking lot with a Shell station. Fill your tank, then fill your belly. ⛽🌮",
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="info" className="bg-[#F1E7DA] pb-16 md:pb-24 w-full">
      <div className="w-full px-[60px]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-0">
          {/* Left column - Masonry images */}
          <div className="columns-2 gap-0 -ml-[60px] md:-ml-[60px] pt-0">
            {masonryImages.map((img, index) => (
              <div 
                key={index}
                className={`break-inside-avoid overflow-hidden mb-0 stagger-item ${isVisible ? 'stagger-visible' : ''}`}
                style={{
                  transitionDelay: `${index * staggerDelay}s`,
                  animationDelay: `${index * staggerDelay}s`
                }}
              >
                <div 
                  className={`relative w-full ${
                    img.height === "tall" ? "h-64" : 
                    img.height === "medium" ? "h-48" : 
                    "h-40"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Right column - all items */}
          <div className="flex flex-col gap-12 md:pl-[60px] pt-16 md:pt-24">
            <h2 
              className={`font-chunky stagger-item ${isVisible ? 'stagger-visible' : ''}`}
              style={{
                color: 'rgb(219, 68, 57)',
                fontFamily: 'Anton',
                fontSize: '82.24px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '82.24px',
                letterSpacing: 'normal',
                marginBottom: '0',
                transitionDelay: `${staggerDelay * 1}s`,
                animationDelay: `${staggerDelay * 1}s`
              }}
            >
              Things You Need to Know
            </h2>
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col stagger-item ${isVisible ? 'stagger-visible' : ''}`}
                style={{
                  transitionDelay: `${(index + 2) * staggerDelay}s`,
                  animationDelay: `${(index + 2) * staggerDelay}s`
                }}
              >
                <h3 
                  className="font-chunky mb-4"
                  style={{
                    color: 'rgb(219, 68, 57)',
                    fontFamily: 'Anton',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1.2',
                    letterSpacing: 'normal'
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-lg leading-relaxed"
                  style={{
                    color: '#1a1a1a'
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
