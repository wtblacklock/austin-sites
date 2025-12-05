import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import BlogCard from '@/components/ui/BlogCard';
import { getBlogPosts } from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'Blog | Austin Sites',
  description: 'Read our latest articles and insights',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <HeroSection
        title="Our Blog"
        description="Thoughts, stories, and ideas from our team"
        variant="centered"
      />

      <section className="py-20 bg-white">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">No Posts Yet</h2>
              <p className="text-stone-600 max-w-md mx-auto">
                We&apos;re working on some great content. Check back soon or add posts through the Strapi admin panel.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

