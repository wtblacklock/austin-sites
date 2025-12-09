import { foodTruck } from "@/config/foodTruck.config";
import Image from "next/image";

const foodImages = [
  { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=800&fit=crop", alt: "Breakfast tacos", height: "tall" },
  { src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop", alt: "Street tacos", height: "short" },
  { src: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&h=400&fit=crop", alt: "Migas plate", height: "short" },
  { src: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=600&fit=crop", alt: "Taco trio", height: "medium" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=500&fit=crop", alt: "Fresh salsa", height: "medium" },
];

export function MenuFeatured() {
  const { name } = foodTruck;

  return (
    <section id="menu" className="bg-[#111111] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-chunky text-3xl md:text-4xl text-[#FF6B00] mb-12 text-center">
          Our Favs
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Masonry image grid */}
          <div className="columns-2 gap-4 space-y-4">
            {foodImages.map((img, index) => (
              <div 
                key={index} 
                className="break-inside-avoid overflow-hidden rounded-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={img.height === "tall" ? 400 : img.height === "medium" ? 300 : 200}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Right: History */}
          <div className="md:sticky md:top-32">
            <h3 className="font-chunky text-2xl text-white mb-6">
              A South Austin Story
            </h3>
            
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                <span className="text-[#FF6B00] font-bold">16 years ago</span>, Bella 
                set up a small taco trailer on Slaughter Lane with one mission: serve 
                fresh, honest tacos to the neighborhood.
              </p>
              
              <p>
                What started as a weekend side hustle quickly became a South Austin 
                institution. Word spread about the perfectly seasoned breakfast tacos, 
                the tender pastor, and the friendly woman behind the window who treated 
                every customer like family.
              </p>
              
              <p>
                Today, {name} is still that same little trailer — no franchises, no 
                food trucks across town. Just Bella, her recipes, and a loyal community 
                of taco lovers who know that the best things in life are simple.
              </p>

              <div className="pt-6 border-t border-[#2a2a2a]">
                <p className="text-[#FF6B00] font-chunky text-lg mb-2">
                  "She's been in business for 16 years now, believe it or not."
                </p>
                <p className="text-sm text-white/50">— Chris M., Yelp Review</p>
              </div>
            </div>

            <div className="mt-10 flex gap-6">
              <div>
                <p className="font-chunky text-4xl text-[#FF6B00]">16+</p>
                <p className="text-sm text-white/50 uppercase tracking-wider">Years</p>
              </div>
              <div>
                <p className="font-chunky text-4xl text-[#FF6B00]">4.6★</p>
                <p className="text-sm text-white/50 uppercase tracking-wider">Yelp Rating</p>
              </div>
              <div>
                <p className="font-chunky text-4xl text-[#FF6B00]">73+</p>
                <p className="text-sm text-white/50 uppercase tracking-wider">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
