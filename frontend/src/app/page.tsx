import { NavMinimal } from "@/components/NavMinimal";
import { FixedBottomCta } from "@/components/FixedBottomCta";
import { JaggedSeparator } from "@/components/JaggedSeparator";
import { DiamondSeparator } from "@/components/DiamondSeparator";
import { ZigzagSeparator } from "@/components/ZigzagSeparator";
import {
  HeroTruck,
  MenuHighlight,
  VibeStrip,
  InstagramGrid,
  LocationHours,
  TestimonialsStrip,
  BottomCtaBand,
} from "@/sections";

export default function HomePage() {
  return (
    <>
      <NavMinimal />
      <main className="min-h-screen">
        <HeroTruck />
        <MenuHighlight />
        <VibeStrip />
        <LocationHours />
        <ZigzagSeparator color="#FF000D" bgColor="#faf8f5" scrolling={true} />
        <TestimonialsStrip />
        <InstagramGrid />
        <div className="h-[75px] bg-[#faf8f5]"></div>
        <ZigzagSeparator color="#FF000D" bgColor="#faf8f5" scrolling={true} />
        <BottomCtaBand />
      </main>
      <FixedBottomCta />
    </>
  );
}
