import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'centered' | 'split';
}

export default function HeroSection({
  title,
  description,
  imageUrl,
  imageAlt = 'Hero image',
  ctaText,
  ctaLink,
  variant = 'default',
}: HeroSectionProps) {
  if (variant === 'centered') {
    return (
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-amber-50 via-stone-50 to-rose-50">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors"
            >
              {ctaText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>
      </section>
    );
  }

  if (variant === 'split') {
    return (
      <section className="relative min-h-[70vh] bg-stone-50">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight">
                {title}
              </h1>
              {description && (
                <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                  {description}
                </p>
              )}
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors"
                >
                  {ctaText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </div>
            {imageUrl && (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="relative min-h-[50vh] flex items-center bg-gradient-to-r from-stone-100 to-stone-50">
      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      )}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

