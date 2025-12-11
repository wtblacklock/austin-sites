import {
  Navbar,
  Hero,
  ScrollingBar,
  SauceIntro,
  VisitSection,
  QuoteStory,
  InstagramScrollingBar,
  ThingsToKnow,
  Newsletter,
  Footer,
} from "@/components/jones-style";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F1E7DA] w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <ScrollingBar />
      <SauceIntro />
      <VisitSection />
      <QuoteStory />
      <InstagramScrollingBar />
      <ThingsToKnow />
      <Newsletter />
      <Footer />
    </main>
  );
}
