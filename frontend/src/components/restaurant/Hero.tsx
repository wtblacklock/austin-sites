import Link from "next/link";
import { foodTruck } from "@/config/foodTruck.config";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { name, tagline } = foodTruck;

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-20">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content - Left aligned */}
      <div className="relative z-10 text-left px-6 max-w-[1200px] mx-auto w-full">
        <h1 className="font-chunky text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
          Award-Winning Tacos <span className="text-[#FF6B00]">in South Austin</span> 🌮
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl">
          {tagline}
        </p>

        <div className="flex">
          <Link href="https://www.doordash.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#FF6B00] hover:bg-[#FF8533] text-white font-button text-lg px-8 py-6 h-auto">
              Order Ahead
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
