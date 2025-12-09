"use client";

import { Button } from "@/components/ui/button";
import { foodTruck } from "@/config/foodTruck.config";
import Link from "next/link";

interface BottomBarProps {
  ctaLabel?: string;
  ctaHref?: string;
}

export function BottomBar({ ctaLabel, ctaHref }: BottomBarProps) {
  const { primaryLocation, primaryCta } = foodTruck;
  
  const label = ctaLabel || primaryCta.label;
  const href = ctaHref || primaryLocation.mapUrl;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] border-t border-[#2a2a2a] p-4">
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        <Button 
          className="w-full h-14 bg-[#FF6B00] hover:bg-[#FF8533] text-white font-chunky text-xl tracking-wide"
        >
          {label}
        </Button>
      </Link>
    </div>
  );
}

