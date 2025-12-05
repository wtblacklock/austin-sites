import { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import { getPageByType, getStrapiMediaUrl } from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'About Us | Austin Sites',
  description: 'Learn more about who we are and what we do',
};

export default async function AboutPage() {
  const page = await getPageByType('about');

  // Default content if no page is set up in Strapi
  const title = page?.heroTitle || 'About Us';
  const description = page?.heroDescription || 'We\'re passionate about creating great experiences and sharing valuable insights with our community.';
  const imageUrl = page?.heroImage?.url ? getStrapiMediaUrl(page.heroImage.url) : null;
  const content = page?.content || `
    <p>Welcome to Austin Sites! We're dedicated to bringing you quality content, insights, and experiences that matter.</p>
    <h2>Our Mission</h2>
    <p>Our mission is to create a platform where ideas flourish, connections are made, and knowledge is shared freely. We believe in the power of community and the importance of staying informed in today's fast-paced world.</p>
    <h2>What We Do</h2>
    <p>We curate and create content that inspires, educates, and entertains. From thought-provoking articles to practical guides, we cover a wide range of topics that our community cares about.</p>
    <h2>Our Values</h2>
    <p>Integrity, creativity, and community are at the heart of everything we do. We strive to maintain the highest standards in our content while fostering an inclusive environment for all.</p>
  `;

  return (
    <>
      <HeroSection
        title={title}
        description={description}
        imageUrl={imageUrl || undefined}
        variant={imageUrl ? 'split' : 'centered'}
      />

      <section className="py-20 bg-white">
        <Container narrow>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stone-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Our Team</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Meet the people behind Austin Sites
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Team Member', role: 'Founder', image: null },
              { name: 'Team Member', role: 'Content Lead', image: null },
              { name: 'Team Member', role: 'Developer', image: null },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-amber-100 to-rose-100">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-stone-900">{member.name}</h3>
                <p className="text-stone-600">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

