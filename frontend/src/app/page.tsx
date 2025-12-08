import { NavMinimal } from "@/components/NavMinimal";
import { FixedBottomCta } from "@/components/FixedBottomCta";
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
        <TestimonialsStrip />
        <LocationHours />
        <InstagramGrid />
        <BottomCtaBand />
      </main>
      <FixedBottomCta />
    </>
  );
}
