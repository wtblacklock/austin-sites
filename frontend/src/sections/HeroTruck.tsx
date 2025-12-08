import { foodTruck } from "@/config/foodTruck.config";
import Image from "next/image";
import Link from "next/link";

export function HeroTruck() {
  const { hero } = foodTruck;

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image - Tacos */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1920&h=1080&fit=crop"
          alt="Delicious tacos"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content - Left aligned */}
      <div className="relative z-10 container-grid">
        <div className="max-w-4xl">
          {/* Big chunky title with red background */}
          <h1 className="font-chunky text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-10 inline-block">
            <span className="bg-[#FF000D] px-4 py-2 inline-block">Always Fresh.</span>
            <br />
            <span className="bg-[#FF000D] px-4 py-2 inline-block mt-2">Always Bella.</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={hero.primaryCtaHref}
              className="inline-block bg-[#FF000D] text-white px-10 py-5 text-lg font-bold uppercase tracking-wide hover:bg-[#cc000a] transition-colors shadow-xl"
            >
              {hero.primaryCtaLabel}
            </Link>
            <Link
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FFDD00] text-[#FF000D] px-10 py-5 text-lg font-bold uppercase tracking-wide hover:bg-[#FFE433] transition-colors shadow-xl"
            >
              Order Ahead
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
