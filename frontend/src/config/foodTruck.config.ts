// src/config/foodTruck.config.ts

export const foodTruck = {
  // Core identity
  name: "Taco Bella's",
  tagline: "South Austin tacos from a little trailer with a big attitude.",
  logoUrl: "/images/taco-bellas-logo.png",

  // Social
  instagramHandle: "@tacobellas_atx",
  instagramUrl: "https://www.instagram.com/tacobellas_atx",

  // Contact / location
  phone: "(512) 740-2289",
  primaryLocation: {
    address: "3008 W Slaughter Ln, Austin, TX 78748",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=3008+W+Slaughter+Ln,+Austin,+TX+78748",
    notes:
      "Usually parked off Slaughter Lane in South Austin. Check Instagram stories for pop ups and updated hours.",
  },

  // Hours
  hours: [
    { label: "Monday", value: "7:00 am – 2:00 pm" },
    { label: "Tuesday", value: "7:00 am – 2:00 pm" },
    { label: "Wednesday", value: "Closed or limited hours – check Instagram" },
    { label: "Thursday", value: "Closed or limited hours – check Instagram" },
    { label: "Friday", value: "Closed or limited hours – check Instagram" },
    { label: "Saturday", value: "Breakfast and pop ups – check Instagram" },
    { label: "Sunday", value: "Breakfast and pop ups – check Instagram" },
  ],

  // Hero section
  hero: {
    title: "Taco Bella's",
    subtitle:
      "South Austin taco trailer slinging breakfast tacos, pastor, and late-night cravings on Slaughter Lane.",
    primaryCtaLabel: "Find us today",
    primaryCtaHref: "#location",
    secondaryCtaLabel: "Follow on Instagram",
    secondaryCtaHref: "https://www.instagram.com/tacobellas_atx",
    heroImageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&h=800&fit=crop",
  },

  // Menu highlight section
  menuHighlights: [
    {
      id: 1,
      label: "Breakfast tacos",
      description:
        "Egg, potato, bacon, chorizo, cheese, and more — folded into hot tortillas for the morning rush.",
    },
    {
      id: 2,
      label: "Street tacos",
      description:
        "Tacos loaded with pastor, steak, or chicken, topped with fresh cilantro, onion, and salsa.",
    },
    {
      id: 3,
      label: "Migas & crispy chips",
      description:
        "Austin-style migas with crunchy chips, eggs, and salsa for the classic South Austin start.",
    },
    {
      id: 4,
      label: "Daily specials",
      description:
        "Rotating plates, combos, and whatever sounds good from the grill that day. Ask at the window.",
    },
  ],

  // Big Menu Button
  menuCta: {
    label: "View Full Menu",
    href: "/menu.pdf",
  },

  // Vibe imagery - People eating outside
  vibeImages: [
    { src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=600&fit=crop", alt: "Friends eating at outdoor patio" },
    { src: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=600&h=600&fit=crop", alt: "Outdoor picnic table dining" },
    { src: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=600&h=600&fit=crop", alt: "People at outdoor cafe" },
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop", alt: "Al fresco dining" },
  ],

  // Instagram placeholders
  instagramFeed: [
    { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop", alt: "Breakfast tacos", href: "https://www.instagram.com/tacobellas_atx" },
    { src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=400&fit=crop", alt: "Pastor tacos", href: "https://www.instagram.com/tacobellas_atx" },
    { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop", alt: "Evening trailer", href: "https://www.instagram.com/tacobellas_atx" },
    { src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=400&fit=crop", alt: "Salsa bar", href: "https://www.instagram.com/tacobellas_atx" },
    { src: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=400&fit=crop", alt: "Hand holding taco", href: "https://www.instagram.com/tacobellas_atx" },
    { src: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=400&h=400&fit=crop", alt: "Morning line", href: "https://www.instagram.com/tacobellas_atx" },
  ],

  // Real Yelp testimonials from https://www.yelp.com/biz/taco-bellas-austin
  testimonials: [
    { 
      quote: "I think I found my new favorite taco truck! The owner is so friendly and helped with recommendations. I had the pastor and steak tacos and they were delicious!", 
      author: "Linnea F." 
    },
    { 
      quote: "I love Taco Bella's. The owner behind the counter was so sweet, but most importantly the tacos were some of the best I have ever had. Fresh, hot, and delicious.", 
      author: "Kim Y." 
    },
    { 
      quote: "Really great experience with wonderful food. Didn't realize they had been at this location for years already since I'm always on the hunt for a taco shop.", 
      author: "Robert A." 
    },
    { 
      quote: "She's been in business for 16 years now believe it or not. The owner is very nice and eager to please. I loved the breakfast tacos here!", 
      author: "Chris M." 
    },
    { 
      quote: "These are by far THE BEST tacos I've ever had. The service was great; she was as nice as if I was a regular customer. I'll be back again and again!", 
      author: "Candice N." 
    },
  ],

  // Catering block
  catering: {
    enabled: true,
    blurb:
      "Planning a party or office breakfast? Bring Taco Bella's to your event with custom taco trays and specials.",
    ctaLabel: "Ask about catering",
    ctaHref: "mailto:info@tacobellas-atx.com",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=400&fit=crop",
  },

  // Bottom CTA
  primaryCta: {
    label: "Open in Maps",
    href: "https://www.google.com/maps/search/?api=1&query=3008+W+Slaughter+Ln,+Austin,+TX+78748",
  },
};
