"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { foodTruck } from "@/config/foodTruck.config";

interface FeedCardProps {
  type: "image" | "text" | "highlight";
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  badge?: string;
}

export function FeedCard({ type, title, description, imageUrl, imageAlt, badge }: FeedCardProps) {
  if (type === "image" && imageUrl) {
    return (
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] overflow-hidden">
        {/* Image */}
        <div className="relative aspect-square">
          <Image
            src={imageUrl}
            alt={imageAlt || "Feed image"}
            fill
            className="object-cover"
          />
          {badge && (
            <div className="absolute top-3 left-3 bg-[#FF6B00] text-white px-3 py-1 rounded-full">
              <span className="font-chunky text-xs">{badge}</span>
            </div>
          )}
        </div>
        
        {/* Caption */}
        {(title || description) && (
          <div className="p-4">
            {title && (
              <h3 className="font-chunky text-lg text-white mb-1">{title}</h3>
            )}
            {description && (
              <p className="text-sm text-[#a0a0a0] leading-relaxed">{description}</p>
            )}
          </div>
        )}
      </Card>
    );
  }

  if (type === "text") {
    return (
      <Card className="bg-[#FF6B00] border-none p-6">
        {badge && (
          <span className="inline-block bg-[#0a0a0a] text-white px-3 py-1 rounded-full font-chunky text-xs mb-3">
            {badge}
          </span>
        )}
        {title && (
          <h3 className="font-chunky text-2xl text-white mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-white/90 leading-relaxed">{description}</p>
        )}
      </Card>
    );
  }

  if (type === "highlight") {
    return (
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0">
            <span className="font-chunky text-white text-lg">★</span>
          </div>
          <div>
            {title && (
              <h3 className="font-chunky text-lg text-white mb-1">{title}</h3>
            )}
            {description && (
              <p className="text-sm text-[#a0a0a0] leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      </Card>
    );
  }

  return null;
}

