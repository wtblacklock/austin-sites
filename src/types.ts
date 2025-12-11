export interface MenuItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  price: string;
}

export interface Offering {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}