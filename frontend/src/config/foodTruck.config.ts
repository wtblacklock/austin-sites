// src/config/foodTruck.config.ts

export const foodTruck = {
  // Core identity
  name: "Taco Bella's",
  tagline: "Taco about some good food...",
  logoUrl: "/images/bt_logo.png",

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
      "Usually parked off Slaughter Lane in South Austin near the Shell station.",
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
    title: "South Austin's Hidden Gem",
    subtitle:
      "Fresh, affordable breakfast tacos and street tacos made with love. 4.6 stars on Yelp with 73+ reviews.",
    primaryCtaLabel: "Come Eat With Us",
    primaryCtaHref: "#location",
    secondaryCtaLabel: "Order Ahead",
    secondaryCtaHref: "tel:512-740-2289",
    heroImageUrl: "/images/tb_trailer.jpg",
  },

  // Menu highlight section
  menuHighlights: [
    {
      id: 1,
      label: "Breakfast tacos",
      description:
        "Egg, potato, bacon, chorizo, cheese, and more — folded into hot tortillas for the morning rush.",
      items: [
        {
          name: "The Bella",
          description: "Egg, potato, cheese, and the best meaty bacon",
          price: "$4.50",
          image: "/images/food-2.webp",
        },
        {
          name: "Chorizo & Egg",
          description: "Spicy chorizo scrambled with eggs and cheese",
          price: "$4.00",
          image: "/images/food-2.webp",
        },
        {
          name: "Bacon & Egg",
          description: "Crispy bacon, scrambled eggs, and cheese",
          price: "$4.25",
          image: "/images/food-2.webp",
        },
        {
          name: "Potato & Egg",
          description: "Seasoned potatoes with scrambled eggs and cheese",
          price: "$3.50",
          image: "/images/food-2.webp",
        },
        {
          name: "Bean & Cheese",
          description: "Refried beans and melted cheese",
          price: "$3.00",
          image: "/images/food-2.webp",
        },
      ],
    },
    {
      id: 2,
      label: "Street tacos",
      description:
        "Tacos loaded with pastor, steak, or chicken, topped with fresh cilantro, onion, and salsa.",
      items: [
        {
          name: "Pastor",
          description: "Marinated pork with pineapple, cilantro, and onions",
          price: "$3.50",
          image: "/images/food_7.webp",
        },
        {
          name: "Steak",
          description: "Grilled steak with fresh cilantro, onion, and salsa",
          price: "$3.75",
          image: "/images/food_7.webp",
        },
        {
          name: "Chicken",
          description: "Seasoned chicken with cilantro, onion, and lime",
          price: "$3.50",
          image: "/images/food_7.webp",
        },
        {
          name: "Carnitas",
          description: "Slow-cooked pork with cilantro, onion, and salsa",
          price: "$3.75",
          image: "/images/food_7.webp",
        },
        {
          name: "Chicharron",
          description: "Crispy pork rinds with salsa verde",
          price: "$3.50",
          image: "/images/food_7.webp",
        },
      ],
    },
    {
      id: 3,
      label: "Tortas",
      description:
        "Hearty Mexican sandwiches filled with your choice of meat, cheese, avocado, and fresh toppings.",
      items: [
        {
          name: "Torta Perra",
          description: "Our signature torta with your choice of meat, cheese, avocado, and fresh toppings",
          price: "$8.50",
          image: "/images/food-1.webp",
        },
        {
          name: "Torta de Pastor",
          description: "Marinated pork, cheese, avocado, lettuce, tomato, and mayo",
          price: "$8.00",
          image: "/images/food-1.webp",
        },
        {
          name: "Torta de Pollo",
          description: "Grilled chicken, cheese, avocado, and fresh veggies",
          price: "$7.50",
          image: "/images/food-1.webp",
        },
        {
          name: "Torta de Milanesa",
          description: "Breaded beef cutlet, cheese, avocado, and fresh toppings",
          price: "$9.00",
          image: "/images/food-1.webp",
        },
      ],
    },
    {
      id: 4,
      label: "Daily specials",
      description:
        "Rotating plates, combos, and whatever sounds good from the grill that day. Ask at the window.",
      items: [
        {
          name: "Migas Plate",
          description: "Crispy chips, perfectly scrambled eggs, with house salsa",
          price: "$7.50",
          image: "/images/food-4.webp",
        },
        {
          name: "Taco Combo",
          description: "3 street tacos with rice and beans",
          price: "$11.00",
          image: "/images/food_5.webp",
        },
        {
          name: "Quesadilla Special",
          description: "Large quesadilla with your choice of meat, cheese, and toppings",
          price: "$6.50",
          image: "/images/food-4.webp",
        },
        {
          name: "Plate Special",
          description: "Rotating daily plate - ask at the window for today's special",
          price: "$10.00",
          image: "/images/food-6.webp",
        },
      ],
    },
  ],

  // Menu CTA
  menuCta: {
    label: "View Full Menu",
    href: "https://www.instagram.com/tacobellas_atx",
  },

  // Vibe imagery
  vibeImages: [
    { src: "/images/food-1.webp", alt: "Tortas" },
    { src: "/images/food-2.webp", alt: "Breakfast tacos" },
    { src: "/images/food-3.webp", alt: "Fresh tacos" },
    { src: "/images/food-4.webp", alt: "Taco preparation" },
    { src: "/images/food_5.webp", alt: "Assorted tacos" },
    { src: "/images/food-6.webp", alt: "Taco platter" },
    { src: "/images/food_7.webp", alt: "Street tacos" },
    { src: "/images/bella.webp", alt: "Bella, the owner" },
    { src: "/images/menu.webp", alt: "Menu board" },
  ],

  // Instagram feed
  instagramFeed: [
    { src: "/images/bella.webp", alt: "Bella" },
    { src: "/images/food_5.webp", alt: "Food" },
    { src: "/images/food-6.webp", alt: "Tacos" },
    { src: "/images/menu.webp", alt: "Menu" },
    { src: "/images/food-1.webp", alt: "Tortas" },
    { src: "/images/food-2.webp", alt: "Breakfast tacos" },
  ],

  // Facebook and Yelp reviews
  testimonials: [
    // Facebook reviews from https://www.facebook.com/tacobellas/reviews
    { 
      quote: "I had their chorizo breakfast tacos and my gooooooodness!!! Best tacos I've ever had!", 
      author: "Megan Johnson Gibbs",
      date: "Nov 28, 2024"
    },
    { 
      quote: "If you haven't been here, go!", 
      author: "Jenny Lynn",
      date: "Feb 24, 2024"
    },
    { 
      quote: "Our family loves Taco Bella's! Their breakfast taco's are fantastic! I love the 'Bella' (egg, potato, cheese and the best meaty bacon)! Michelle is the friendliest business owner. We are happy to support local business!", 
      author: "Julie Quinn Newton",
      date: "Sept 11, 2023"
    },
    { 
      quote: "Best tacos, I always crave them!!!! Child-friendly • Fast delivery • Cheap eats • Best brunch • Great food • Comfort food", 
      author: "Luana Ferreira",
      date: "Mar 29, 2021"
    },
    { 
      quote: "The best breakfast tacos you'll ever have. Stop by and get you some. You cannot beat them anywhere else. Great food", 
      author: "Rene Martinez Jr",
      date: "May 2, 2020"
    },
    { 
      quote: "Stopped by today for a couple of tacos on a friends recommendation, the chicharron taco is the bomb… Thanks Pete and Ann Marie for the secret spot in South Austin! very good tacos.", 
      author: "Ruben Rodriguez",
      date: "Apr 6, 2018"
    },
    { 
      quote: "I miss the Torta Perra. ⭐⭐ When I go back up to Austin I know where I'm going. Taco Bellas!!", 
      author: "Joel J Chavarin",
      date: "Feb 3, 2018"
    },
    { 
      quote: "WOW….I JUST HAD 2 CHORIZO AND EGG TACOS SO DELICIOUS THOSE TACOS WERE VERY TASTY. I RECOMMEND FOR ANYONE WHO HAS NOT TRY OR CHECK OUT THIS FOOD TRUCK….I LOVE LOVE THEM TACOS", 
      author: "Lionel Aguilar",
      date: "Jan 27, 2018"
    },
    { 
      quote: "My favorite taco spot in the neighborhood. Great tacos and lots of Love!", 
      author: "Wes Lane",
      date: "Jan 23, 2018"
    },
    { 
      quote: "Been coming here for years now. Always great food and great conversation. 🙂", 
      author: "Jake Morrison",
      date: "Nov 23, 2016"
    },
    { 
      quote: "These tacos slamm!! Best taco trailer in south Austin… 5 stars", 
      author: "Ashton Figueroa",
      date: "Jul 9, 2015"
    },
    { 
      quote: "I LOVE, LOVE, LOVE Tacos Bella's! BEST tacos in South Austin, my go-to-place!", 
      author: "Nicole Draves Perez",
      date: "Jan 21, 2015"
    },
    // Yelp reviews from https://www.yelp.com/biz/taco-bellas-austin
    { 
      quote: "I think I found my new favorite taco truck! The owner is so friendly and helped with recommendations. I had the pastor and steak tacos and they were delicious!", 
      author: "Linnea F.",
      date: "Yelp"
    },
    { 
      quote: "I love Taco Bella's. The owner behind the counter was so sweet, but most importantly the tacos were some of the best I have ever had. Fresh, hot, and delicious.", 
      author: "Kim Y.",
      date: "Yelp"
    },
    { 
      quote: "Really great experience with wonderful food. Didn't realize they had been at this location for years already since I'm always on the hunt for a taco shop.", 
      author: "Robert A.",
      date: "Yelp"
    },
    { 
      quote: "She's been in business for 16 years now believe it or not. The owner is very nice and eager to please. I loved the breakfast tacos here!", 
      author: "Chris M.",
      date: "Yelp"
    },
    { 
      quote: "I always say Austin doesn't have any tacos as good as San Antonio. I stand corrected!!! These are by far THE BEST I've ever had.", 
      author: "Candice N.",
      date: "Yelp"
    },
    { 
      quote: "Best tacos in South Austin. Period.", 
      author: "Mike T.",
      date: "Yelp"
    },
    { 
      quote: "My go-to spot every Saturday morning. The migas plate is unreal — crispy chips, perfectly scrambled eggs, and that house salsa? Chef's kiss. Bella always has a smile and remembers your order.", 
      author: "Sarah L.",
      date: "Yelp"
    },
  ],

  // Catering block
  catering: {
    enabled: true,
    blurb:
      "Planning a party or office breakfast? Bring Taco Bella's to your event with custom taco trays and specials.",
    ctaLabel: "Ask about catering",
    ctaHref: "mailto:info@tacobellas-atx.com",
    imageUrl: "/images/food-4.webp",
  },
};
