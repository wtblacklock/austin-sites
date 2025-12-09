import { foodTruck } from "@/config/foodTruck.config";
import Image from "next/image";
import { ZigzagSeparator } from "@/components/ZigzagSeparator";

export function VibeStrip() {
  const { vibeImages } = foodTruck;

  return (
    <>
      <section id="vibe" className="bg-transparent py-2">
        {/* Full-width image strip - people eating at taco trucks */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible gap-2">
          {vibeImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-auto snap-center aspect-square relative overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>
      {/* White zigzag separator below vibe section - full width */}
      <div className="mb-[25px]">
        <ZigzagSeparator color="#FFFFFF" bgColor="transparent" scrolling={true} />
      </div>
    </>
  );
}
