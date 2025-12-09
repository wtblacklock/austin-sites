import { foodTruck } from "@/config/foodTruck.config";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const foodImages = [
  { src: "/images/food-1.webp", alt: "Taco Bella's food", height: "tall" },
  { src: "/images/food-2.webp", alt: "Taco Bella's food", height: "short" },
  { src: "/images/food-3.webp", alt: "Taco Bella's food", height: "short" },
  { src: "/images/food-4.webp", alt: "Taco Bella's food", height: "medium" },
  { src: "/images/food_5.webp", alt: "Taco Bella's food", height: "medium" },
  { src: "/images/food-6.webp", alt: "Taco Bella's food", height: "tall" },
  { src: "/images/food_7.webp", alt: "Taco Bella's food", height: "short" },
];

export function MenuFeatured() {
  const { name, instagramUrl } = foodTruck;

  return (
    <section id="menu" className="bg-[#111111] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-chunky text-3xl md:text-4xl text-[#FF6B00] mb-12 text-center">
          From the Trailer
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Masonry image grid - links to Instagram */}
          <div>
            <div className="columns-2 gap-4 space-y-4">
              {foodImages.map((img, index) => (
                <Link 
                  key={index}
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block break-inside-avoid overflow-hidden rounded-lg group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={img.height === "tall" ? 400 : img.height === "medium" ? 300 : 200}
                    quality={100}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) saturate(1.1)' }}
                  />
                </Link>
              ))}
            </div>

            {/* Follow on Instagram button */}
            <div className="mt-8">
              <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 text-white font-button text-lg px-8 py-6 h-auto flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow on Instagram
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:sticky md:top-32">
            {/* Fan Favorites - Menu blurb and CTA */}
            <div className="mb-12">
              <h3 className="font-chunky text-2xl text-[#FF6B00] mb-4">
                Fan Favorites
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                From crispy bacon & egg breakfast tacos to tender pastor with fresh cilantro and onion — every bite is made to order. Don't miss the migas plate or our famous street taco trio.
              </p>
              <Link href="/menu.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white font-button text-lg px-8 py-5 h-auto">
                  View Full Menu
                </Button>
              </Link>
            </div>

            {/* A South Austin Story */}
            <div className="pt-8 border-t border-[#2a2a2a]">
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
      </div>
    </section>
  );
}
