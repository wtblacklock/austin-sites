import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types/strapi';
import { getStrapiMediaUrl } from '@/lib/strapi';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imageUrl = post.featuredImage?.url
    ? getStrapiMediaUrl(post.featuredImage.url)
    : null;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
      {imageUrl && (
        <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.featuredImage?.alternativeText || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-stone-500 mb-3">
          <time dateTime={post.publishDate}>{formattedDate}</time>
          {post.tags && post.tags.length > 0 && (
            <>
              <span>•</span>
              <span className="text-amber-600 font-medium">{post.tags[0]}</span>
            </>
          )}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        {post.excerpt && (
          <p className="text-stone-600 leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        )}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-stone-900 font-medium hover:text-amber-700 transition-colors"
        >
          Read more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

