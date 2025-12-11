import { HeroTacoBellas, ImageGallery, TestimonialsStrip } from '@/sections';
import { getHero, getGalleryImages, getTestimonials, getMenuItems, getStrapiMediaUrl } from '@/lib/strapi';

// Default/fallback data when Strapi is not available
const defaultHero = {
  title: "Taco Bella's",
  subtitle: "Serving South Austin since 2008 – over 16 years at the same location! Fresh, affordable breakfast tacos and street tacos made with love. 4.6 stars on Yelp with 73+ reviews.",
  ctaLabel: "Find us today",
  ctaHref: "#location",
  backgroundImage: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1920&h=1080&fit=crop",
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
  },
  {
    quote: "I love Taco Bella's. The owner behind the counter was so sweet, but most importantly the tacos were some of the best I have ever had. Fresh, hot, and delicious.",
    author: "Kim Y.",
  },
  {
    quote: "Really great experience with wonderful food. Didn't realize they had been at this location for years already since I'm always on the hunt for a taco shop.",
    author: "Robert A.",
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
    backgroundImage: hero?.backgroundImage?.url 
      ? getStrapiMediaUrl(hero.backgroundImage.url) 
      : defaultHero.backgroundImage,
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
    <main>
      {/* Hero Section */}
      <HeroTacoBellas
        title={heroData.title}
        subtitle={heroData.subtitle}
        ctaLabel={heroData.ctaLabel}
        ctaHref={heroData.ctaHref}
        backgroundImage={heroData.backgroundImage}
      />

      {/* Image Gallery Section */}
      <ImageGallery
        title="From the window to your plate"
        subtitle="Fresh ingredients, authentic recipes, made with love every single day."
        images={galleryData}
      />

      {/* Testimonials Section */}
      <TestimonialsStrip
        title="What the regulars say"
        testimonials={testimonialsData}
      />

      {/* Location Section */}
      <section id="location" className="py-16 px-4 bg-base-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
          <p className="text-lg opacity-70 mb-8">
            Come hungry, leave happy. We&apos;re parked and ready to serve!
          </p>
          
          {/* Location card */}
          <div className="card bg-base-200 shadow-xl max-w-md mx-auto">
            <div className="card-body">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Taco Bella&apos;s</h3>
                  <p className="opacity-70">3008 W Slaughter Ln</p>
                  <p className="opacity-70">Austin, TX 78748</p>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <div className="flex items-start gap-4">
                <div className="text-3xl">🕐</div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Hours</h3>
                  <p className="opacity-70">Mon–Sat: 7am – 2pm</p>
                  <p className="opacity-70">Sunday: Closed</p>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Contact</h3>
                  <p className="opacity-70">(512) 740-2289</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-8 rounded-xl overflow-hidden max-w-2xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.8!2d-97.8747!3d30.1697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDEwJzExLjAiTiA5N8KwNTInMjkuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=3008+W+Slaughter+Ln+Austin+TX+78748"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Directions
            </a>
            <a href="tel:+15127402289" className="btn btn-outline">
              Call to Order
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-lg opacity-70 mb-8">
            Simple. Delicious. Made fresh every day.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Breakfast Tacos */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  🌅 Breakfast Tacos
                </h3>
                <ul className="space-y-3 mt-4">
                  {(breakfastItems.length > 0 ? breakfastItems : defaultMenuItems.breakfast).map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="font-bold">${item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Street Tacos */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  🌮 Street Tacos
                </h3>
                <ul className="space-y-3 mt-4">
                  {(lunchItems.length > 0 ? lunchItems : defaultMenuItems.lunch).map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="font-bold">${item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
            </div>
            </div>
          </div>

          <p className="mt-8 text-sm opacity-60">
            All tacos served on fresh corn or flour tortillas. Breakfast served all day!
          </p>
        </div>
      </section>
    </main>
  );
}
