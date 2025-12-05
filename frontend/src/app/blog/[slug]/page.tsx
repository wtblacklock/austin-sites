import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import { getBlogPostBySlug, getBlogPosts, getStrapiMediaUrl } from '@/lib/strapi';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Austin Sites',
    };
  }

  return {
    title: `${post.title} | Austin Sites`,
    description: post.description || post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imageUrl = post.featuredImage?.url
    ? getStrapiMediaUrl(post.featuredImage.url)
    : null;

  return (
    <article>
      {/* Header */}
      <header className="bg-gradient-to-br from-amber-50 via-stone-50 to-rose-50 py-16">
        <Container narrow>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 text-sm text-stone-500 mb-4">
            <time dateTime={post.publishDate}>{formattedDate}</time>
            {post.author && (
              <>
                <span>•</span>
                <span>By {post.author}</span>
              </>
            )}
            {post.tags && post.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-amber-600 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-xl text-stone-600 leading-relaxed">
              {post.description}
            </p>
          )}
        </Container>
      </header>

      {/* Featured Image */}
      {imageUrl && (
        <div className="relative -mt-8">
          <Container narrow>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={post.featuredImage?.alternativeText || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Container>
        </div>
      )}

      {/* Content */}
      <section className="py-16">
        <Container narrow>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-stone-100">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-stone-600 mb-6">
              Check out more posts or get in touch with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full font-medium hover:bg-stone-800 transition-colors"
              >
                More Posts
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-full font-medium hover:bg-stone-50 transition-colors border border-stone-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}

