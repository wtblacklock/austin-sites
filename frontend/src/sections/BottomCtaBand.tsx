import { foodTruck } from "@/config/foodTruck.config";
import Link from "next/link";
import Image from "next/image";
import { ZigzagSeparator } from "@/components/ZigzagSeparator";

export function BottomCtaBand() {
  const { catering, hero, primaryLocation } = foodTruck;

  return (
    <>
      {/* Catering Section (if enabled) */}
      {catering.enabled && (
        <>
          <section id="catering" className="section-padding bg-[#faf8f5]">
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
          {/* Red zigzag separator below catering section */}
          <ZigzagSeparator color="#FF000D" bgColor="#faf8f5" scrolling={true} />
          <div className="h-[75px] bg-[#faf8f5]"></div>
        </>
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
            Taco about some good food...
          </p>

          {/* Desktop CTA - hidden on mobile/tablet */}
          <Link
            href="tel:512-740-2289"
            className="hidden lg:inline-flex items-center gap-2 bg-[#FFDD00] text-[#FF000D] px-12 py-5 text-xl font-bold uppercase tracking-wide hover:bg-[#FFE433] transition-colors shadow-lg mb-12"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Order Ahead
          </Link>

          {/* Address line - linked to map */}
          <div className="border-t border-white/20 pt-8 mt-8 space-y-4 text-white">
            <Link
              href={primaryLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white hover:underline transition-colors"
            >
              {foodTruck.primaryLocation.address}
            </Link>
            <p>Open Mon–Sat · 7am – 2pm</p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://www.facebook.com/tacobellas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFDD00] transition-colors"
                aria-label="Facebook"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </Link>
              <Link
                href={foodTruck.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFDD00] transition-colors"
                aria-label="Instagram"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Spacer for fixed bottom CTA on mobile/tablet */}
      <div className="h-24 lg:hidden" />
    </>
  );
}
