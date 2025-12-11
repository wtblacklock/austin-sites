"use client";

import { bbq } from "@/config/bbq.config";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function QuoteStory() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="reviews" className={`bg-[#db4439] py-16 md:py-24 w-full scroll-fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="w-full px-[60px]">
        {/* Main Quote */}
        <div className="text-center mb-16">
          <h2 
            className="font-chunky mb-4"
            style={{
              color: '#F1E7DA',
              fontFamily: 'Anton',
              fontSize: '86px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '1.1',
              letterSpacing: 'normal'
            }}
          >
            "These tacos slam!!! Best taco trailer in south Austin."
          </h2>
          <p 
            className="text-lg mb-0"
            style={{
              color: '#F1E7DA',
              fontFamily: 'Anton',
              fontStyle: 'normal',
              fontWeight: 400
            }}
          >
            - Ashton F.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bbq.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F1E7DA] p-6 rounded-lg"
              style={{
                boxShadow: 'rgb(118, 40, 36) -8px 8px 0px 0px',
              }}
            >
              <p 
                className="text-lg mb-4 leading-relaxed"
                style={{
                  color: '#1a1a1a',
                  fontFamily: 'Anton',
                  fontStyle: 'normal',
                  fontWeight: 400
                }}
              >
                "{testimonial.quote}"
              </p>
              <p 
                className="text-sm"
                style={{
                  color: '#db4439',
                  fontFamily: 'Anton',
                  fontStyle: 'normal',
                  fontWeight: 400
                }}
              >
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

