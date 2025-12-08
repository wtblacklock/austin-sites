import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import BlogCard from '@/components/ui/BlogCard';
import { getBlogPosts } from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'Blog | Business Name',
  description: 'Read our latest articles, news, and insights.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <HeroSection
        title="Our Blog"
        description="Insights, news, and updates from our team"
        variant="centered"
      />

      <section className="py-20 bg-base-100">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-2xl font-bold mb-4">No Posts Yet</h2>
              <p className="opacity-70 max-w-md mx-auto mb-8">
                We&apos;re working on some great content. Check back soon or add posts through the Strapi admin panel.
              </p>
              <a href="/" className="btn btn-primary">
                Go Home
              </a>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
