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
          {menuHighlights.slice(0, 4).map((item, index) => (
            <div key={item.id} className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={`https://images.unsplash.com/photo-${
                    index === 0 ? "1565299585323-38d6b0865b47" :
                    index === 1 ? "1551504734-5ee1c4a1479b" :
                    index === 2 ? "1599974579688-8dbdd335c77f" :
                    "1613514785940-daed07799d9b"
                  }?w=800&h=600&fit=crop`}
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
          ))}
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
