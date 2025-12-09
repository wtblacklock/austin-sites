import { HeroHighlight, AnimatedTestimonials, SpotlightCard } from '@/components/aceternity';
import { GallerySlider } from '@/components/aceternity/gallery-slider';
import { ImageGallery } from '@/components/aceternity/image-gallery';
import { FloatingNav } from '@/components/aceternity/floating-navbar';
import MenuAccordion from '@/components/ui/MenuAccordion';
import VideoPopup from '@/components/ui/VideoPopup';
import { FloatingTikTokWidget } from '@/components/restaurant/FloatingTikTokWidget';
import { foodTruck } from '@/config/foodTruck.config';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: "Menu", link: "#menu" },
  { name: "Gallery", link: "#gallery" },
  { name: "Reviews", link: "#reviews" },
  { name: "Location", link: "#location" },
];

export default function HomePage() {
  const { hero, menuHighlights, vibeImages, testimonials, instagramFeed, primaryLocation, hours, instagramUrl, phone } = foodTruck;

  // Process testimonials for AnimatedTestimonials component
  const testimonialsData = testimonials.map(t => ({
    quote: t.quote,
    author: t.author,
    role: t.date || "Review",
  }));

  // Process gallery images from vibeImages
  const galleryData = vibeImages.map(img => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <main className="bg-white">
      {/* Video Popup - Shows on page load */}
      <VideoPopup 
        videoUrl="https://www.tiktok.com/embed/v2/7447574236547419438"
        delay={1500}
        showOnlyOnce={true}
      />

      {/* Floating Navigation */}
              <FloatingNav 
                navItems={navItems}
                logo={
                  <Link href="/" className="text-xl font-bold text-gray-900">
                    {foodTruck.name}
                  </Link>
                }
                instagramUrl={instagramUrl}
                facebookUrl="https://www.facebook.com/tacobellas"
                phone={phone}
              />

      {/* Hero Section */}
      <HeroHighlight
        title={hero.title}
        subtitle={hero.subtitle}
        ctaLabel={hero.primaryCtaLabel}
        ctaHref={hero.primaryCtaHref}
        secondaryCtaLabel={hero.secondaryCtaLabel}
        secondaryCtaHref={hero.secondaryCtaHref}
      />

      {/* Image Gallery - Full Width (below hero) */}
      <div className="w-full mb-20">
        <ImageGallery images={galleryData} />
      </div>

      {/* Menu Section */}
      <section id="menu" className="relative py-32 px-6 bg-white">
        <div className="relative mx-auto w-full">
          <div className="relative mx-auto max-w-[1400px]">

          <div className="mb-20 text-left">
            <h2 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl">
              Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Menu</span>
            </h2>
            <p className="text-lg text-gray-600">Fresh tacos made with love. Breakfast served all day!</p>
          </div>

          <div className="mb-12">
            <MenuAccordion categories={menuHighlights} />
          </div>

          <div className="text-center">
            <a
              href={foodTruck.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-32 bg-gray-50">
        <div className="relative mx-auto max-w-[1400px] mb-20 px-6">
          <div className="text-center">
            <h2 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl">
              Feel The <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Vibe</span>
            </h2>
            <p className="text-lg text-gray-600">See what&apos;s cooking at {foodTruck.name}</p>
          </div>
        </div>
        <div className="w-full">
          <GallerySlider images={galleryData} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="relative py-32 px-6 bg-white">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl">
              What People <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-lg text-gray-600">4.6 stars on Yelp • 73+ Reviews</p>
          </div>

          <AnimatedTestimonials testimonials={testimonialsData} />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="relative py-32 px-6 bg-gray-50">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="mb-20 text-left">
            <h2 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl">
              Find <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-lg text-gray-600">Come visit us in South Austin!</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Address */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Address</h3>
              <p className="text-lg text-gray-700 mb-3">{primaryLocation.address}</p>
              {primaryLocation.notes && (
                <p className="text-gray-600 mb-6">{primaryLocation.notes}</p>
              )}
              <a
                href={primaryLocation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-base font-medium text-orange-500 hover:text-orange-600 transition-colors"
              >
                Get Directions →
              </a>
            </div>

            {/* Hours */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Hours</h3>
              <div className="space-y-2 mb-6">
                {hours.map((hour, idx) => (
                  <p key={idx} className="text-lg text-gray-700">
                    <span className="font-semibold">{hour.label}:</span> {hour.value}
                  </p>
                ))}
              </div>
              <p className="text-base text-orange-500 font-medium">Breakfast served all day!</p>
            </div>

            {/* Phone */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Phone</h3>
              <p className="text-lg text-gray-700 mb-6">{foodTruck.phone}</p>
              <a
                href={`tel:${foodTruck.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Order Ahead
              </a>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Follow Us</h3>
              <div className="space-y-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zM18.406 6.155c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/tacobellas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-16 px-6">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="mb-4 text-3xl font-bold text-gray-900">🌮 {foodTruck.name}</p>
          <p className="mb-8 text-lg text-gray-600">{foodTruck.tagline}</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500">
            <a href={`tel:${foodTruck.phone.replace(/\D/g, '')}`} className="hover:text-orange-500 transition-colors">
              {foodTruck.phone}
            </a>
            <span>•</span>
            <span className="text-gray-500">{primaryLocation.address}</span>
          </div>
          <p className="mt-12 text-sm text-gray-400">
            © {new Date().getFullYear()} {foodTruck.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating TikTok Widget */}
      <FloatingTikTokWidget
        videoUrl="https://www.tiktok.com/embed/v2/7447574236547419438"
        thumbnailSrc="/images/tikitok.png"
      />
    </main>
  );
}
