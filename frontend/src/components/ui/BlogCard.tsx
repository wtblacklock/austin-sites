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
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      {imageUrl && (
        <figure className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={post.featuredImage?.alternativeText || post.title}
            fill
            className="object-cover"
          />
        </figure>
      )}
      <div className="card-body">
        <div className="flex items-center gap-2 text-sm opacity-60">
          <time dateTime={post.publishDate}>{formattedDate}</time>
          {post.tags && post.tags.length > 0 && (
            <>
              <span>•</span>
              <span className="badge badge-primary badge-sm">{post.tags[0]}</span>
            </>
          )}
        </div>
        <h2 className="card-title">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
          </h2>
        {post.excerpt && (
          <p className="opacity-70 line-clamp-3">{post.excerpt}</p>
        )}
        <div className="card-actions justify-end">
          <Link href={`/blog/${post.slug}`} className="btn btn-primary btn-sm">
            Read More
        </Link>
        </div>
      </div>
    </div>
  );
}
