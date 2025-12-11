"use client";

import { Badge } from "flowbite-react";
import { bbq } from "@/config/bbq.config";

export function FeaturedInStrip() {
  return (
    <section className="bg-white py-12 w-full">
      <div className="w-full px-[60px]">
        <h3 className="text-center text-[#666666] text-sm uppercase tracking-wider mb-8">
          Featured In
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {bbq.featuredIn.map((item, index) => (
            <Badge
              key={index}
              color="gray"
              className="bg-[#E8D9C8] text-[#1a1a1a] border-[#DDCDBC] px-6 py-2 text-base"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

