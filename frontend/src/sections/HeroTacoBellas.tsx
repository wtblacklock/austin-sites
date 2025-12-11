import Link from 'next/link';
import Image from 'next/image';

interface HeroTacoBellasProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export default function HeroTacoBellas({
  title,
  subtitle,
  ctaLabel = 'Find us today',
  ctaHref = '#location',
  backgroundImage = 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1920&h=1080&fit=crop',
}: HeroTacoBellasProps) {
  return (
    <section className="hero min-h-[80vh] relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Taco Bella's background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 py-12 px-4 relative z-10">
        {/* Right side - Visual representation */}
        <div className="flex-1 max-w-md lg:max-w-lg">
          <div className="mockup-window bg-base-300/90 backdrop-blur-sm border border-base-300">
            <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex flex-col justify-center items-center px-8 py-16">
              <div className="text-6xl mb-4">🌮</div>
              <p className="text-white text-2xl font-bold text-center drop-shadow-lg">
                Fresh Daily
              </p>
              <p className="text-white/90 text-lg text-center mt-2">
                South Austin&apos;s Favorite
              </p>
              <div className="flex gap-2 mt-4">
                <span className="badge badge-warning badge-lg">Breakfast</span>
                <span className="badge badge-error badge-lg">Lunch</span>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="flex justify-center gap-4 mt-4">
            <div className="badge badge-outline text-white border-white/50">🔥 Made Fresh</div>
            <div className="badge badge-outline text-white border-white/50">💚 Local Ingredients</div>
          </div>
        </div>

        {/* Left side - Text content */}
        <div className="flex-1 text-center lg:text-left text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="py-6 text-lg md:text-xl text-white/90 max-w-lg drop-shadow">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href={ctaHref} className="btn btn-primary btn-lg">
              {ctaLabel}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
            <Link href="#menu" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black">
              View Menu
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span className="text-warning">★★★★★</span>
              <span>4.9 on Google</span>
            </div>
            <div className="divider divider-horizontal hidden sm:flex before:bg-white/30 after:bg-white/30"></div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span>📍</span>
              <span>South Austin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
