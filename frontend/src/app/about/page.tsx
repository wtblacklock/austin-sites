import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import { getPageByType, getStrapiMediaUrl } from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'About Us | Business Name',
  description: 'Learn more about our company, our mission, and our team.',
};

export default async function AboutPage() {
  const page = await getPageByType('about');

  const title = page?.heroTitle || 'About Us';
  const description = page?.heroDescription || 'Learn more about our story, our mission, and the team behind our success.';
  const imageUrl = page?.heroImage?.url ? getStrapiMediaUrl(page.heroImage.url) : undefined;

  return (
    <>
      <HeroSection
        title={title}
        description={description}
        imageUrl={imageUrl}
        variant={imageUrl ? 'split' : 'centered'}
      />

      {/* Story Section */}
      <section className="py-20 bg-base-100">
        <Container className="max-w-4xl">
          {page?.content ? (
            <div
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg opacity-80 mb-6">
                Founded with a passion for excellence, we&apos;ve been helping businesses achieve their goals for over a decade. What started as a small operation has grown into a trusted partner for companies of all sizes.
              </p>
              <p className="text-lg opacity-80 mb-6">
                Our journey has been defined by our commitment to quality, innovation, and customer satisfaction. We believe that every client deserves personalized attention and solutions tailored to their unique needs.
              </p>
              <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
              <p className="text-lg opacity-80 mb-6">
                To empower businesses with the tools, strategies, and support they need to thrive in an ever-changing marketplace. We&apos;re dedicated to delivering exceptional value and building lasting relationships with our clients.
              </p>
              <h2 className="text-3xl font-bold mb-6 mt-12">Our Values</h2>
              <ul className="list-disc pl-6 text-lg opacity-80 space-y-2">
                <li><strong>Integrity:</strong> We do what&apos;s right, even when no one is watching.</li>
                <li><strong>Excellence:</strong> We strive for the highest standards in everything we do.</li>
                <li><strong>Innovation:</strong> We embrace new ideas and continuously improve.</li>
                <li><strong>Collaboration:</strong> We believe in the power of working together.</li>
              </ul>
            </>
          )}
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-base-200">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Jane Doe', role: 'Founder & CEO', bio: 'Visionary leader with 15+ years of industry experience.' },
              { name: 'John Smith', role: 'Operations Director', bio: 'Expert in streamlining processes and driving efficiency.' },
              { name: 'Emily Brown', role: 'Client Success Lead', bio: 'Dedicated to ensuring every client achieves their goals.' },
            ].map((member, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="avatar placeholder mb-4">
                    <div className="bg-primary text-primary-content w-24 rounded-full">
                      <span className="text-3xl">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="card-title">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="opacity-70">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-base-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Want to Work With Us?</h2>
            <p className="text-lg opacity-70 mb-8">
              We&apos;re always looking to partner with great businesses. Let&apos;s start a conversation.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">
              Get in Touch
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
