import { HeroHighlight, BentoImageCard, AnimatedTestimonials, SpotlightCard } from '@/components/aceternity';
import { FloatingNav } from '@/components/aceternity/floating-navbar';
import { getHero, getGalleryImages, getTestimonials, getMenuItems, getStrapiMediaUrl } from '@/lib/strapi';
import Link from 'next/link';

// Default/fallback data when Strapi is not available
const defaultHero = {
  title: "Taco Bella's",
  subtitle: "Serving South Austin since 2008 – over 16 years at the same location! Fresh, affordable breakfast tacos and street tacos made with love. 4.6 stars on Yelp with 73+ reviews.",
  ctaLabel: "Find us today",
  ctaHref: "#location",
};

const defaultGalleryImages = [
  { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=450&fit=crop", alt: "The Bella Taco – egg, bacon, potato & cheese" },
  { src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=450&fit=crop", alt: "Beef fajita tacos on flour tortilla" },
  { src: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&h=450&fit=crop", alt: "Al pastor tacos – crispy and delicious" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=450&fit=crop", alt: "Migas taco with crispy chips" },
  { src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=450&fit=crop", alt: "Fresh red and green salsa" },
  { src: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=450&fit=crop", alt: "Carnitas on a fresh corn tortilla" },
];

const defaultTestimonials = [
  {
    quote: "I think I found my new favorite taco truck! The owner is so friendly and helped with recommendations. I had the pastor and steak tacos and they were delicious!",
    author: "Linnea F.",
    role: "Yelp Review",
  },
  {
    quote: "I love Taco Bella's. The owner behind the counter was so sweet, but most importantly the tacos were some of the best I have ever had. Fresh, hot, and delicious.",
    author: "Kim Y.",
    role: "Yelp Review",
  },
  {
    quote: "Really great experience with wonderful food. Didn't realize they had been at this location for years already since I'm always on the hunt for a taco shop.",
    author: "Robert A.",
    role: "Yelp Review",
  },
];

const defaultMenuItems = {
  breakfast: [
    { name: "Bella Taco (Egg, Bacon, Potato, Cheese)", price: 4 },
    { name: "Bacon & Egg", price: 3.5 },
    { name: "Migas", price: 4 },
    { name: "Chorizo & Egg", price: 4 },
    { name: "Bean & Cheese", price: 3 },
  ],
  lunch: [
    { name: "Beef Fajita", price: 4.5 },
    { name: "Al Pastor", price: 4 },
    { name: "Carnitas", price: 4 },
    { name: "Steak Taco", price: 4.5 },
    { name: "Barbacoa", price: 4.5 },
  ],
};

const navItems = [
  { name: "Menu", link: "#menu" },
  { name: "Gallery", link: "#gallery" },
  { name: "Reviews", link: "#reviews" },
  { name: "Location", link: "#location" },
];

export default async function HomePage() {
  // Fetch data from Strapi
  const [hero, galleryImages, testimonials, menuItems] = await Promise.all([
    getHero(),
    getGalleryImages(),
    getTestimonials(),
    getMenuItems(),
  ]);

  // Process hero data
  const heroData = {
    title: hero?.title || defaultHero.title,
    subtitle: hero?.subtitle || defaultHero.subtitle,
    ctaLabel: hero?.ctaLabel || defaultHero.ctaLabel,
    ctaHref: hero?.ctaHref || defaultHero.ctaHref,
  };

  // Process gallery images
  const galleryData = galleryImages.length > 0
    ? galleryImages.map(img => ({
        src: getStrapiMediaUrl(img.image.url),
        alt: img.alt,
      }))
    : defaultGalleryImages;

  // Process testimonials
  const testimonialsData = testimonials.length > 0
    ? testimonials.map(t => ({
        quote: t.quote,
        author: t.author,
        role: "Yelp Review",
        avatar: t.avatar?.url ? getStrapiMediaUrl(t.avatar.url) : undefined,
      }))
    : defaultTestimonials;

  // Process menu items - map to consistent format
  const breakfastItems = menuItems
    .filter(item => item.category === 'breakfast')
    .map(item => ({ name: item.name, price: item.price }));
  const lunchItems = menuItems
    .filter(item => item.category === 'lunch')
    .map(item => ({ name: item.name, price: item.price }));

  return (
    <main className="bg-black">
      {/* Floating Navigation */}
      <FloatingNav 
        navItems={navItems}
        logo={
          <Link href="/" className="text-xl font-bold text-white">
            🌮 Taco Bella&apos;s
          </Link>
        }
      />

      {/* Hero Section */}
      <HeroHighlight
        title={heroData.title}
        subtitle={heroData.subtitle}
        ctaLabel={heroData.ctaLabel}
        ctaHref={heroData.ctaHref}
        secondaryCtaLabel="View Menu"
        secondaryCtaHref="#menu"
      />

      {/* Menu Section */}
      <section id="menu" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Menu</span>
            </h2>
            <p className="text-zinc-400">Fresh tacos made with love. Breakfast served all day!</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Breakfast Tacos */}
            <SpotlightCard className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-4xl">🌅</span>
                <h3 className="text-2xl font-bold text-white">Breakfast Tacos</h3>
              </div>
              <ul className="space-y-4">
                {(breakfastItems.length > 0 ? breakfastItems : defaultMenuItems.breakfast).map((item, index) => (
                  <li key={index} className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-zinc-300">{item.name}</span>
                    <span className="font-bold text-green-400">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>

            {/* Street Tacos */}
            <SpotlightCard className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-4xl">🌮</span>
                <h3 className="text-2xl font-bold text-white">Street Tacos</h3>
              </div>
              <ul className="space-y-4">
                {(lunchItems.length > 0 ? lunchItems : defaultMenuItems.lunch).map((item, index) => (
                  <li key={index} className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-zinc-300">{item.name}</span>
                    <span className="font-bold text-green-400">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Fresh From The <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Grill</span>
            </h2>
            <p className="text-zinc-400">See what&apos;s cooking at Taco Bella&apos;s</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryData.map((image, index) => (
              <BentoImageCard
                key={index}
                src={image.src}
                alt={image.alt}
                className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              What People <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-zinc-400">4.6 stars on Yelp • 73+ Reviews</p>
          </div>

          <AnimatedTestimonials testimonials={testimonialsData} />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Find <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-zinc-400">Come visit us in South Austin!</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Address */}
            <SpotlightCard className="p-6 text-center">
              <div className="mb-4 text-4xl">📍</div>
              <h3 className="mb-2 text-lg font-bold text-white">Address</h3>
              <p className="text-zinc-400">3008 W Slaughter Ln</p>
              <p className="text-zinc-400">Austin, TX 78748</p>
              <a
                href="https://maps.google.com/?q=3008+W+Slaughter+Ln+Austin+TX+78748"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-green-400 hover:text-green-300"
              >
                Get Directions →
              </a>
            </SpotlightCard>

            {/* Hours */}
            <SpotlightCard className="p-6 text-center">
              <div className="mb-4 text-4xl">🕐</div>
              <h3 className="mb-2 text-lg font-bold text-white">Hours</h3>
              <p className="text-zinc-400">Mon – Sat: 7am – 2pm</p>
              <p className="text-zinc-400">Sunday: Closed</p>
              <p className="mt-4 text-sm text-green-400">Breakfast served all day!</p>
            </SpotlightCard>

            {/* Phone */}
            <SpotlightCard className="p-6 text-center">
              <div className="mb-4 text-4xl">📞</div>
              <h3 className="mb-2 text-lg font-bold text-white">Phone</h3>
              <p className="text-zinc-400">(512) 740-2289</p>
              <a
                href="tel:+15127402289"
                className="mt-4 inline-block rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Call Now
              </a>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-2xl font-bold text-white">🌮 Taco Bella&apos;s</p>
          <p className="mb-6 text-zinc-500">Serving South Austin since 2008</p>
          <div className="flex justify-center gap-6 text-zinc-400">
            <a href="https://www.yelp.com/biz/taco-bellas-austin" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              Yelp
            </a>
            <span>•</span>
            <a href="tel:+15127402289" className="hover:text-green-400 transition-colors">
              (512) 740-2289
            </a>
            <span>•</span>
            <span>3008 W Slaughter Ln, Austin TX</span>
          </div>
          <p className="mt-8 text-sm text-zinc-600">
            © {new Date().getFullYear()} Taco Bella&apos;s. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
