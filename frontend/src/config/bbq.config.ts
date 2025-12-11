// src/config/bbq.config.ts
// BBQ brand configuration adapted from existing content

export const bbq = {
  // Core identity
  name: "Austin BBQ",
  tagline: "Sauce made with love in Austin, Texas",
  logoUrl: "/images/bt_logo.png",
  since: "Since 1970",

  // Social
  instagramHandle: "@tacobellas_atx",
  instagramUrl: "https://www.instagram.com/tacobellas_atx",
  facebookUrl: "https://www.facebook.com/tacobellas",

  // Contact / location
  phone: "(512) 740-2289",
  email: "info@austinbbq.com",
  mediaEmail: "media@austinbbq.com",
  primaryLocation: {
    address: "3008 W Slaughter Ln, Austin, TX 78748",
    city: "Austin",
    state: "TX",
    zip: "78748",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=3008+W+Slaughter+Ln,+Austin,+TX+78748",
    notes:
      "Usually parked off Slaughter Lane in South Austin. Check Instagram stories for pop ups and updated hours.",
  },

  // Hours
  hours: [
    { label: "Monday", value: "7:00 am – 2:00 pm" },
    { label: "Tuesday", value: "7:00 am – 2:00 pm" },
    { label: "Wednesday", value: "7:00 am – 2:00 pm" },
    { label: "Thursday", value: "7:00 am – 2:00 pm" },
    { label: "Friday", value: "7:00 am – 2:00 pm" },
    { label: "Saturday", value: "7:00 am – 2:00 pm" },
    { label: "Sunday", value: "Closed" },
  ],

  // Hero section
  hero: {
    headline: "Sauce made with love in Austin, Texas",
    subheadline: "Since 1970, we've been crafting the perfect blend of smoke, spice, and tradition.",
    primaryCtaLabel: "Shop Our Sauces",
    primaryCtaHref: "/shop",
    heroImageUrl: "/images/food-1.webp",
  },

  // Sauce story
  sauceStory: {
    headline: "THE MAGIC OF AUSTIN BBQ IN YOUR HOME",
    description: "Our signature sauce recipe has been passed down through generations, combining the perfect balance of sweet, tangy, and smoky flavors. Made with love and the finest ingredients, our sauces bring the authentic taste of Texas BBQ to your table.",
    ctaLabel: "Shop Our Sauces",
    ctaHref: "/shop",
  },

  // Featured in
  featuredIn: [
    "Local Favorite",
    "Austin BBQ Guide",
    "Texas Monthly",
    "Austin Chronicle",
  ],

  // Restaurant section
  restaurant: {
    headline: "Stop by our restaurant",
    description: "Experience the real deal at our Austin location. We serve up slow-smoked brisket, ribs, and pulled pork alongside our famous sauces. Come for the food, stay for the community vibe.",
    menuCtaLabel: "View Our Menu",
    menuCtaHref: "/menu",
    imageUrl: "/images/tb_trailer.jpg",
  },

  // Quote and story
  quote: {
    text: "THE BEST ATTITUDE IS GRATITUDE",
    author: "— THE AUSTIN BBQ FAMILY",
  },
  story: {
    teaser: "From a small smoker in the backyard to Austin's favorite BBQ spot, our story is one of passion, family, and the perfect smoke ring.",
    ctaLabel: "Read Our Story",
    ctaHref: "/our-roots",
    images: [
      { src: "/images/food-2.webp", alt: "BBQ pitmaster" },
      { src: "/images/food-3.webp", alt: "BBQ team" },
    ],
  },

  // Newsletter
  newsletter: {
    headline: "Stay in the know",
    description: "Get the latest on new sauce flavors, special events, and exclusive offers delivered to your inbox.",
  },

  // Testimonials
  testimonials: [
    {
      quote: "I had their chorizo breakfast tacos and my gooooooodness!!! Best tacos I've ever had!",
      author: "Megan Johnson Gibbs",
    },
    {
      quote: "If you haven't been here, go!",
      author: "Jenny Lynn",
    },
    {
      quote: "Our family loves Taco Bella's! Their breakfast taco's are fantastic! I love the 'Bella' (egg, potato, cheese and the best meaty bacon)!",
      author: "Julie Quinn Newton",
    },
    {
      quote: "Best tacos, I always crave them!!!!",
      author: "Luana Ferreira",
    },
    {
      quote: "The best breakfast tacos you'll ever have. Stop by and get you some. You cannot beat them anywhere else.",
      author: "Rene Martinez Jr",
    },
  ],
};

