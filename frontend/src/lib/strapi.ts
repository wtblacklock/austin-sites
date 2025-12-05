import {
  BlogPost,
  Page,
  SiteSetting,
  NavigationItem,
  StrapiResponse,
  StrapiListResponse,
} from '@/types/strapi';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const res = await fetch(`${STRAPI_URL}/api${endpoint}`, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!res.ok) {
    console.error(`Strapi API error: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to fetch from Strapi: ${res.statusText}`);
  }

  return res.json();
}

// Blog Posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetchAPI<StrapiListResponse<BlogPost>>(
      '/blog-posts?populate=featuredImage&sort=publishDate:desc&publicationState=live'
    );
    return response.data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetchAPI<StrapiListResponse<BlogPost>>(
      `/blog-posts?filters[slug][$eq]=${slug}&populate=featuredImage&publicationState=live`
    );
    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Pages
export async function getPages(): Promise<Page[]> {
  try {
    const response = await fetchAPI<StrapiListResponse<Page>>(
      '/pages?populate=heroImage&publicationState=live'
    );
    return response.data || [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const response = await fetchAPI<StrapiListResponse<Page>>(
      `/pages?filters[slug][$eq]=${slug}&populate=heroImage&publicationState=live`
    );
    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getPageByType(pageType: string): Promise<Page | null> {
  try {
    const response = await fetchAPI<StrapiListResponse<Page>>(
      `/pages?filters[pageType][$eq]=${pageType}&populate=heroImage&publicationState=live`
    );
    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching page by type:', error);
    return null;
  }
}

// Site Settings
export async function getSiteSettings(): Promise<SiteSetting | null> {
  try {
    const response = await fetchAPI<StrapiResponse<SiteSetting>>(
      '/site-setting?populate=logo,favicon,socialImage'
    );
    return response.data || null;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

// Navigation
export async function getNavigation(): Promise<NavigationItem[]> {
  try {
    const response = await fetchAPI<StrapiListResponse<NavigationItem>>(
      '/navigation-items?sort=order:asc'
    );
    return response.data || [];
  } catch (error) {
    console.error('Error fetching navigation:', error);
    return [];
  }
}

// Helper to get full image URL
export function getStrapiMediaUrl(url: string | undefined): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

