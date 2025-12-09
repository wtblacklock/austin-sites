import { foodTruck } from "@/config/foodTruck.config";
import Image from "next/image";
import Link from "next/link";

export function MenuHighlight() {
  const { menuHighlights, menuCta } = foodTruck;

  return (
    <section id="menu" className="section-padding bg-[#FF000D]">
      <div className="container-grid">
        {/* Section Header - Left aligned, no separator */}
        <div className="mb-12">
          <h2 className="font-chunky text-4xl sm:text-5xl md:text-6xl text-white">
            What We Serve
          </h2>
        </div>

        {/* Menu Grid - Image heavy, no hover effects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {menuHighlights.slice(0, 4).map((item) => {
            // Map each menu item to its specific image
            const imageMap: Record<number, string> = {
              1: "/images/food-2.webp", // Breakfast tacos
              2: "/images/food_7.webp", // Street tacos
              3: "/images/food-1.webp", // Tortas
              4: "/images/food-4.webp", // Daily specials
            };
            return (
              <div key={item.id} className="relative overflow-hidden rounded-lg shadow-xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={imageMap[item.id] || "/images/food-1.webp"}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Text with red background box like hero - responsive bottom margin */}
                <div className="absolute left-0 p-4 bottom-[15px] md:bottom-[25px]">
                  <h3 className="font-chunky text-2xl md:text-3xl text-white inline-block">
                    <span className="bg-[#FF000D] px-3 py-1">{item.label}</span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Menu CTA */}
        <div>
          <Link
            href={menuCta.href}
            className="inline-block bg-white text-[#FF000D] px-12 py-5 text-xl font-bold uppercase tracking-wide hover:bg-[#faf8f5] transition-colors shadow-lg"
          >
            {menuCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
