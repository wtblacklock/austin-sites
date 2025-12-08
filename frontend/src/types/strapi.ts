// Strapi response types

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: { url: string; width: number; height: number };
    small?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    large?: { url: string; width: number; height: number };
  };
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description?: string;
  content: string;
  excerpt?: string;
  featuredImage?: StrapiImage;
  publishDate: string;
  tags?: string[];
  author?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Page {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  pageType: 'about' | 'contact' | 'legal' | 'landing' | 'services' | 'custom';
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: StrapiImage;
  content?: string;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Service {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  icon?: string;
  image?: StrapiImage;
  price?: string;
  order: number;
}

export interface Testimonial {
  id: number;
  documentId: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: StrapiImage;
  rating: number;
  featured: boolean;
}

export interface SiteSetting {
  id: number;
  documentId: string;
  siteName: string;
  siteTitle: string;
  siteDescription?: string;
  siteUrl?: string;
  logo?: StrapiImage;
  favicon?: StrapiImage;
  socialImage?: StrapiImage;
  primaryColor?: string;
  theme?: string;
  footerText?: string;
  copyrightText?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
}

export interface NavigationItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  order: number;
  isExternal: boolean;
  openInNewTab: boolean;
}

export interface Hero {
  id: number;
  documentId: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: StrapiImage;
}

export interface GalleryImage {
  id: number;
  documentId: string;
  image: StrapiImage;
  alt: string;
  order: number;
}

export interface MenuItem {
  id: number;
  documentId: string;
  name: string;
  description?: string;
  price: number;
  category: 'breakfast' | 'lunch' | 'drinks' | 'sides';
  image?: StrapiImage;
  featured: boolean;
  order: number;
}

// Strapi API response wrapper
export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiListResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
