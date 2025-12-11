import { MenuItem, Offering, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Barbacoa',
    category: 'Lunch Tacos',
    image: '/images/taco-barbacoa.jpg',
    description: 'Slow-cooked, tender beef cheek with fresh onions and cilantro. A South Austin Sunday tradition, served daily.',
    price: '$3.50'
  },
  {
    id: '2',
    name: 'Al Pastor',
    category: 'Lunch Tacos',
    image: '/images/taco-al-pastor.jpg',
    description: 'Marinated pork, rotisserie style. Served with pineapple for that perfect sweet and savory kick.',
    price: '$3.50'
  },
  {
    id: '3',
    name: 'Breakfast Tacos',
    category: 'Breakfast All Day',
    image: '/images/breakfast-taco.jpg',
    description: 'Scrambled eggs with crispy corn tortilla strips, jalapeños, onions, and cheese. The breakfast of champions.',
    price: '$8.00'
  },
  {
    id: '4',
    name: 'The Torta',
    category: 'Sandwiches',
    image: '/images/torta.jpg',
    description: 'Your choice of meat (Fajita, Bistek, Carnitas) on bolillo bread with avocado, lettuce, tomato, and sour cream.',
    price: '$9.00'
  }
];

export const OFFERINGS: Offering[] = [
  {
    id: 'o1',
    title: 'Call-In Orders',
    description: 'Skip the line. Call us at (512) 740-2289 to place your order for pickup. We’ll have it hot and ready.'
  },
  {
    id: 'o2',
    title: 'Breakfast Desayuno',
    description: 'Served from 7am. Potato & Egg, Bacon & Egg, Chorizo & Egg. Homemade flour tortillas that melt in your mouth.'
  },
  {
    id: 'o3',
    title: 'Family Owned',
    description: 'A hidden gem on Slaughter Ln. We put love into every taco, preserving family recipes passed down through generations.'
  },
  {
    id: 'o4',
    title: 'Catering Trays',
    description: 'Feeding a crowd? We offer bulk orders of tacos, gorditas, and quesadillas for your next event.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "This is a hidden gem.",
    author: "@atxjulsey",
    role: "Local Guide"
  },
  {
    id: 't2',
    quote: "The homemade flour tortillas are thick, fluffy, and perfect. Authentic soul food.",
    author: "Carlos M.",
    role: "Regular"
  }
];