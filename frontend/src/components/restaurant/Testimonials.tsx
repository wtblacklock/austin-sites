"use client";

import { useState } from "react";
import { foodTruck } from "@/config/foodTruck.config";
import { Button } from "@/components/ui/button";

// Emojis that rotate based on index
const emojis = ["🌮", "⭐", "🔥", "❤️", "🙌", "😋", "💯", "👏"];

const INITIAL_REVIEWS = 6;
const REVIEWS_PER_PAGE = 12;

export function Testimonials() {
  const { testimonials } = foodTruck;
  const [visibleCount, setVisibleCount] = useState(INITIAL_REVIEWS);

  const visibleReviews = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + REVIEWS_PER_PAGE, testimonials.length));
  };

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-chunky text-3xl md:text-4xl text-white mb-12 text-center">
          What People Say
        </h2>

        {/* Masonry layout - cards shrink to content */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {visibleReviews.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 mb-6 break-inside-avoid inline-block w-full"
            >
              <div className="text-4xl leading-none mb-4">{emojis[index % emojis.length]}</div>
              <p className="text-white/80 my-4 leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="text-sm text-[#FF6B00] font-chunky uppercase tracking-wider">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-10">
            <Button
              onClick={loadMore}
              className="bg-[#FF6B00] hover:bg-[#FF8533] text-white font-button px-8 py-6"
            >
              Load More Reviews
            </Button>
          </div>
        )}

        <div className="text-center mt-10 space-y-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://www.yelp.com/biz/taco-bellas-austin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FF6B00] transition-colors underline"
            >
              View More Reviews on Yelp
            </a>
            <span className="text-white/30 hidden sm:inline">•</span>
            <a 
              href="https://www.facebook.com/tacobellas/reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FF6B00] transition-colors underline"
            >
              View More Reviews on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
