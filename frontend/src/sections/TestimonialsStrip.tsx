import { foodTruck } from "@/config/foodTruck.config";
import Link from "next/link";

export function TestimonialsStrip() {
  const { testimonials } = foodTruck;

  return (
    <section className="py-20 bg-[#faf8f5] overflow-hidden">
      <div className="container-grid">
        {/* Header - Left aligned */}
        <div className="mb-12">
          <h2 className="font-chunky text-4xl md:text-5xl text-[#FF000D] mb-2">
            What People Say
          </h2>
          <p className="text-[#1a1a1a]/60 text-sm uppercase tracking-widest">
            4.6 stars on{" "}
            <Link 
              href="https://www.yelp.com/biz/taco-bellas-austin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-[#FF000D]"
            >
              Yelp
            </Link>
            {" "}· 73+ reviews
          </p>
        </div>
      </div>

      {/* Horizontal scrolling testimonials */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-6 md:px-[calc((100vw-72rem)/2+1.5rem)] scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-80 md:w-96 snap-start bg-[#FF000D] p-8 pb-18 flex flex-col justify-between"
            style={{ paddingBottom: '72px' }}
          >
            {/* Large quote mark */}
            <div className="text-[#FFDD00] text-8xl font-serif leading-none mb-4">"</div>
            
            {/* Quote */}
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
              {testimonial.quote}
            </p>

            {/* Author */}
            {testimonial.author && (
              <p className="text-sm uppercase tracking-widest text-white/70 font-bold mt-auto">
                — {testimonial.author}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
