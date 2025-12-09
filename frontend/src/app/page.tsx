import {
  Header,
  Hero,
  Marquee,
  About,
  MenuFeatured,
  Testimonials,
  InfoCards,
  Contact,
  Footer,
} from "@/components/restaurant";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <div className="relative">
        <Marquee text="Taco About Some Good Food" />
      </div>
      <About />
      <Marquee text="Tacos • Breakfast • Street Food" className="bg-[#1a1a1a]" />
      <MenuFeatured />
      <Testimonials />
      <InfoCards />
      <Contact />
      <Footer />
    </main>
  );
}
