import { foodTruck } from "@/config/foodTruck.config";
import Link from "next/link";
import Image from "next/image";

export function BottomCtaBand() {
  const { catering, hero, primaryLocation } = foodTruck;

  return (
    <>
      {/* Catering Section (if enabled) */}
      {catering.enabled && (
        <section className="section-padding bg-[#faf8f5]">
          <div className="container-grid">
            {/* Header - Left aligned */}
            <div className="mb-8">
              <h3 className="font-chunky text-3xl md:text-4xl text-[#FF000D] mb-4">
                Catering
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={catering.imageUrl || hero.heroImageUrl}
                  alt="Catering"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div>
                <p className="text-lg text-[#1a1a1a]/70 mb-6 leading-relaxed">
                  {catering.blurb}
                </p>
                <Link
                  href={catering.ctaHref}
                  className="inline-block border-2 border-[#FF000D] text-[#FF000D] px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#FF000D] hover:text-white transition-colors"
                >
                  {catering.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#FF000D] py-16 px-6">
        <div className="container-grid">
          {/* Logo - Left aligned */}
          <h2 className="font-chunky text-4xl md:text-5xl text-white mb-8">
            {foodTruck.name}
          </h2>

          {/* Tagline */}
          <p className="text-xl text-white mb-10 max-w-lg leading-relaxed">
            {foodTruck.tagline}
          </p>

          {/* Desktop CTA - hidden on mobile/tablet */}
          <Link
            href="https://www.doordash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block bg-[#FFDD00] text-[#FF000D] px-12 py-5 text-xl font-bold uppercase tracking-wide hover:bg-[#FFE433] transition-colors shadow-lg mb-12"
          >
            Order Ahead
          </Link>

          {/* Address line - linked to map */}
          <div className="border-t border-white/20 pt-8 mt-8 space-y-2 text-white">
            <Link
              href={primaryLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white hover:underline transition-colors"
            >
              {foodTruck.primaryLocation.address}
            </Link>
            <p>Open Mon–Sat · 7am – 2pm</p>
          </div>
        </div>
      </footer>

      {/* Spacer for fixed bottom CTA on mobile/tablet */}
      <div className="h-24 lg:hidden" />
    </>
  );
}
