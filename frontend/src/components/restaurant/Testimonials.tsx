import { foodTruck } from "@/config/foodTruck.config";

// Emojis that rotate based on index
const emojis = ["🌮", "⭐", "🔥", "❤️", "🙌", "😋", "💯", "👏"];

export function Testimonials() {
  const { testimonials } = foodTruck;

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-chunky text-3xl md:text-4xl text-white mb-12 text-center">
          What People Say
        </h2>

        {/* Masonry layout - cards shrink to content */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {testimonials.map((testimonial, index) => (
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

        <div className="text-center mt-10">
          <a 
            href="https://www.yelp.com/biz/taco-bellas-austin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#FF6B00] transition-colors underline"
          >
            View More Reviews on Yelp
          </a>
        </div>
      </div>
    </section>
  );
}
