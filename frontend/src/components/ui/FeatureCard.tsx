import Image from 'next/image';
import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  href: string;
}

export default function FeatureCard({ title, description, imageUrl, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
    >
      {imageUrl && (
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-stone-600 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}

