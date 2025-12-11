"use client";

import { bbq } from "@/config/bbq.config";
import Image from "next/image";

export function SocialStripe() {
  // Use existing food images as placeholders for Instagram feed
  const instagramImages = [
    "/images/food-4.webp",
    "/images/food-5.webp",
    "/images/food-6.webp",
    "/images/food-7.webp",
    "/images/food-1.webp",
    "/images/food-2.webp",
  ];

  return (
    <section className="bg-[#F1E7DA] py-12 w-full">
      <div className="w-full">
        {/* Image Grid - Full width, no padding */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-0 w-full">
          {instagramImages.map((src, index) => (
            <a
              key={index}
              href={bbq.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden hover:opacity-80 transition-opacity"
            >
              <Image
                src={src}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

