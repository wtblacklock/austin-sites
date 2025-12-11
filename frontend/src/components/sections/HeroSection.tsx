import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  variant?: 'default' | 'centered' | 'split' | 'overlay';
}

export default function HeroSection({
  title,
  description,
  imageUrl,
  imageAlt = 'Hero image',
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  variant = 'default',
}: HeroSectionProps) {
  // Centered Hero
  if (variant === 'centered') {
    return (
      <div className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">{title}</h1>
          {description && (
              <p className="py-6 text-lg opacity-80">{description}</p>
          )}
            <div className="flex gap-4 justify-center flex-wrap">
          {ctaText && ctaLink && (
                <Link href={ctaLink} className="btn btn-primary">
              {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link href={secondaryCtaLink} className="btn btn-outline">
                  {secondaryCtaText}
            </Link>
          )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Split Hero with Image
  if (variant === 'split') {
    return (
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
            {imageUrl && (
            <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-square rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">{title}</h1>
            {description && (
              <p className="py-6 text-lg opacity-80">{description}</p>
            )}
            <div className="flex gap-4 flex-wrap">
              {ctaText && ctaLink && (
                <Link href={ctaLink} className="btn btn-primary">
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link href={secondaryCtaLink} className="btn btn-outline">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Overlay Hero
  if (variant === 'overlay' && imageUrl) {
    return (
      <div
        className="hero min-h-[70vh]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            {description && (
              <p className="mb-5 text-lg">{description}</p>
            )}
            <div className="flex gap-4 justify-center flex-wrap">
              {ctaText && ctaLink && (
                <Link href={ctaLink} className="btn btn-primary">
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link href={secondaryCtaLink} className="btn btn-ghost">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default Hero
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content text-center lg:text-left">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">{title}</h1>
          {description && (
            <p className="py-6 opacity-80">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
