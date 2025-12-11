import {
  BlogPost,
  Page,
  Service,
  Testimonial,
  SiteSetting,
  NavigationItem,
  Hero,
  GalleryImage,
  MenuItem,
  StrapiResponse,
  StrapiListResponse,
} from '@/types/strapi';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  try {
  const res = await fetch(`${STRAPI_URL}/api${endpoint}`, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
      next: { revalidate: 60 },
  });

  if (!res.ok) {
      // Silently fail - Strapi might not be running
      return null;
  }

  return res.json();
  } catch {
    // Silently fail - Strapi might not be running
    return null;
  }
}

// Blog Posts
export async function getBlogPosts(): Promise<BlogPost[]> {
    const response = await fetchAPI<StrapiListResponse<BlogPost>>(
      '/blog-posts?populate=featuredImage&sort=publishDate:desc&publicationState=live'
    );
  return response?.data || [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const response = await fetchAPI<StrapiListResponse<BlogPost>>(
      `/blog-posts?filters[slug][$eq]=${slug}&populate=featuredImage&publicationState=live`
    );
  return response?.data?.[0] || null;
}

// Pages
export async function getPages(): Promise<Page[]> {
    const response = await fetchAPI<StrapiListResponse<Page>>(
      '/pages?populate=heroImage&publicationState=live'
    );
  return response?.data || [];
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
    const response = await fetchAPI<StrapiListResponse<Page>>(
      `/pages?filters[slug][$eq]=${slug}&populate=heroImage&publicationState=live`
    );
  return response?.data?.[0] || null;
}

export async function getPageByType(pageType: string): Promise<Page | null> {
    const response = await fetchAPI<StrapiListResponse<Page>>(
      `/pages?filters[pageType][$eq]=${pageType}&populate=heroImage&publicationState=live`
    );
  return response?.data?.[0] || null;
}

// Services
export async function getServices(): Promise<Service[]> {
  const response = await fetchAPI<StrapiListResponse<Service>>(
    '/services?populate=image&sort=order:asc'
  );
  return response?.data || [];
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const response = await fetchAPI<StrapiListResponse<Testimonial>>(
    '/testimonials?populate=avatar&filters[featured][$eq]=true'
  );
  return response?.data || [];
}

// Site Settings
export async function getSiteSettings(): Promise<SiteSetting | null> {
  const response = await fetchAPI<StrapiResponse<SiteSetting>>(
    '/site-setting?populate=*'
  );
  return response?.data || null;
}

// Navigation
export async function getNavigation(): Promise<NavigationItem[]> {
    const response = await fetchAPI<StrapiListResponse<NavigationItem>>(
      '/navigation-items?sort=order:asc'
    );
  return response?.data || [];
}

// Hero Section
export async function getHero(): Promise<Hero | null> {
  const response = await fetchAPI<StrapiResponse<Hero>>(
    '/hero?populate=backgroundImage'
  );
  return response?.data || null;
}

// Gallery Images
export async function getGalleryImages(): Promise<GalleryImage[]> {
  const response = await fetchAPI<StrapiListResponse<GalleryImage>>(
    '/gallery-images?populate=image&sort=order:asc&publicationState=live'
  );
  return response?.data || [];
}

// Menu Items
export async function getMenuItems(): Promise<MenuItem[]> {
  const response = await fetchAPI<StrapiListResponse<MenuItem>>(
    '/menu-items?populate=image&sort=order:asc&publicationState=live'
  );
  return response?.data || [];
}

export async function getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
  const response = await fetchAPI<StrapiListResponse<MenuItem>>(
    `/menu-items?filters[category][$eq]=${category}&populate=image&sort=order:asc&publicationState=live`
  );
  return response?.data || [];
}

// Helper to get full image URL
export function getStrapiMediaUrl(url: string | undefined): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}
