import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import ServiceCard from '@/components/ui/ServiceCard';
import { getServices } from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'Our Services | Business Name',
  description: 'Explore our comprehensive range of services designed to help your business succeed.',
};

// Default services when Strapi is not connected
const defaultServices = [
  {
    id: 1,
    title: 'Consulting',
    description: 'Expert guidance to help you make informed decisions and develop effective strategies for your business growth.',
    price: 'From $150/hr',
  },
  {
    id: 2,
    title: 'Design & Development',
    description: 'Custom solutions tailored to your unique needs, from web design to full-stack application development.',
    price: 'From $2,500',
  },
  {
    id: 3,
    title: 'Marketing',
    description: 'Comprehensive marketing strategies including SEO, social media, and content marketing to grow your audience.',
    price: 'From $1,000/mo',
  },
  {
    id: 4,
    title: 'Support & Maintenance',
    description: 'Ongoing support and maintenance to ensure your systems run smoothly and stay up-to-date.',
    price: 'From $500/mo',
  },
  {
    id: 5,
    title: 'Training',
    description: 'Customized training programs to help your team develop new skills and improve productivity.',
    price: 'From $200/session',
  },
  {
    id: 6,
    title: 'Analytics',
    description: 'Data-driven insights to help you understand your customers and optimize your business operations.',
    price: 'From $750/mo',
  },
];

export default async function ServicesPage() {
  const services = await getServices();
  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <>
      <HeroSection
        title="Our Services"
        description="We offer comprehensive solutions to help your business thrive. Explore our services below."
        variant="centered"
      />

      <section className="py-20 bg-base-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                price={'price' in service ? service.price : undefined}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-200">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful outcomes for every project.
            </p>
          </div>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <div className="badge badge-primary">1</div>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <div className="text-lg font-bold">Discovery</div>
                <p className="opacity-70">We learn about your business, goals, and challenges to understand your unique needs.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="badge badge-primary">2</div>
              </div>
              <div className="timeline-end mb-10">
                <div className="text-lg font-bold">Strategy</div>
                <p className="opacity-70">We develop a customized plan tailored to achieve your specific objectives.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="badge badge-primary">3</div>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <div className="text-lg font-bold">Implementation</div>
                <p className="opacity-70">Our team executes the plan with precision, keeping you informed every step of the way.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="badge badge-primary">4</div>
              </div>
              <div className="timeline-end mb-10">
                <div className="text-lg font-bold">Review & Optimize</div>
                <p className="opacity-70">We measure results, gather feedback, and continuously improve for optimal outcomes.</p>
              </div>
            </li>
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-content">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg opacity-80 mb-8">
              Contact us today for a free consultation and quote.
            </p>
            <a href="/contact" className="btn btn-secondary btn-lg">
              Get a Free Quote
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

