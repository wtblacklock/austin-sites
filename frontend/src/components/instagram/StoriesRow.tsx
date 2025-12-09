"use client";

import { foodTruck } from "@/config/foodTruck.config";
import Link from "next/link";

const storyTiles = [
  { label: "Menu", color: "#FF6B00", href: "#menu" },
  { label: "Hours", color: "#FFDD00", href: "#hours" },
  { label: "Location", color: "#FF6B00", href: "#location" },
  { label: "Specials", color: "#FFDD00", href: "#specials" },
  { label: "Reviews", color: "#FF6B00", href: "#reviews" },
  { label: "Catering", color: "#FFDD00", href: "#catering" },
];

export function StoriesRow() {
  return (
    <div className="bg-[#0a0a0a] border-b border-[#2a2a2a] py-4">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4">
        {storyTiles.map((tile, index) => (
          <Link
            key={index}
            href={tile.href}
            className="flex flex-col items-center gap-2 flex-shrink-0"
          >
            {/* Colored ring/tile */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${tile.color} 0%, ${tile.color}99 100%)`,
                boxShadow: `0 0 20px ${tile.color}40`
              }}
            >
              <div className="w-14 h-14 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                <span className="font-chunky text-xs text-white">{tile.label.slice(0, 3)}</span>
              </div>
            </div>
            {/* Label */}
            <span className="text-xs text-[#a0a0a0] font-medium">{tile.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

