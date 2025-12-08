import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import FeatureCard from '@/components/ui/FeatureCard';
import BlogCard from '@/components/ui/BlogCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { getBlogPosts, getSiteSettings, getTestimonials } from '@/lib/strapi';

export default async function HomePage() {
  const [posts, settings, testimonials] = await Promise.all([
    getBlogPosts(),
    getSiteSettings(),
    getTestimonials(),
  ]);

  const recentPosts = posts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={settings?.siteTitle || "Welcome to Our Business"}
        description={settings?.siteDescription || "We provide exceptional services to help your business grow. Discover how we can help you achieve your goals."}
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
        variant="centered"
      />

      {/* Features/Services Section */}
      <section className="py-20 bg-base-100">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              We offer a wide range of services designed to meet your needs and exceed your expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Service One"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
              href="/services"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
            <FeatureCard
              title="Service Two"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
              href="/services"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <FeatureCard
              title="Service Three"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
              href="/services"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn btn-primary btn-lg">
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-content">
        <Container>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
            <div className="stat place-items-center">
              <div className="stat-title text-primary-content/70">Happy Customers</div>
              <div className="stat-value">500+</div>
              <div className="stat-desc text-primary-content/60">Since 2020</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-primary-content/70">Projects Completed</div>
              <div className="stat-value">1,200+</div>
              <div className="stat-desc text-primary-content/60">↗︎ 40% this year</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-primary-content/70">Years Experience</div>
              <div className="stat-value">15+</div>
              <div className="stat-desc text-primary-content/60">Industry veterans</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-primary-content/70">Satisfaction Rate</div>
              <div className="stat-value">98%</div>
              <div className="stat-desc text-primary-content/60">Based on reviews</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 ? (
        <section className="py-20 bg-base-200">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg opacity-70 max-w-2xl mx-auto">
                Don&apos;t just take our word for it - hear from our satisfied customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </Container>
        </section>
      ) : (
        <section className="py-20 bg-base-200">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Exceptional service! They exceeded our expectations and delivered on time. Highly recommend to anyone looking for quality work."
                author="John Smith"
                role="CEO"
                company="TechCorp"
                rating={5}
              />
              <TestimonialCard
                quote="Professional team that really understands our needs. The results speak for themselves - our business has grown significantly."
                author="Sarah Johnson"
                role="Marketing Director"
                company="Growth Co"
                rating={5}
              />
              <TestimonialCard
                quote="Working with them was a pleasure. Great communication, fair pricing, and outstanding results. Will definitely work together again."
                author="Mike Williams"
                role="Founder"
                company="StartupXYZ"
                rating={5}
              />
            </div>
          </Container>
        </section>
      )}

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-base-100">
          <Container>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2">Latest News</h2>
                <p className="text-lg opacity-70">Stay updated with our latest insights</p>
              </div>
              <Link href="/blog" className="btn btn-outline hidden md:inline-flex">
                View All Posts
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link href="/blog" className="btn btn-outline">
                View All Posts
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-base-300">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg opacity-70 mb-8">
              Contact us today for a free consultation. Let&apos;s discuss how we can help your business grow.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Contact Us
              </Link>
              <Link href="tel:+15551234567" className="btn btn-outline btn-lg">
                Call Now
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
