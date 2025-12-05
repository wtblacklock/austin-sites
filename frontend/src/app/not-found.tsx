import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-amber-50 via-stone-50 to-rose-50">
      <Container>
        <div className="text-center">
          <h1 className="text-8xl font-bold text-stone-200 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            It might have been moved or doesn&apos;t exist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full font-medium hover:bg-stone-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-full font-medium hover:bg-stone-50 transition-colors border border-stone-200"
            >
              View Blog
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

