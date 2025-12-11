import React, { useEffect, useRef } from 'react';
import { OFFERINGS } from '../constants';

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const children = containerRef.current?.querySelectorAll('.reveal');
    children?.forEach(child => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="catering" className="py-24 md:py-32 bg-truck-yellow">
      <div className="container mx-auto px-6 md:px-12" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 reveal">
            <h2 className="text-5xl md:text-6xl font-serif font-black mb-8 text-black">
              South Austin <br/> Staples
            </h2>
            <p className="text-black font-medium leading-relaxed text-lg mb-8">
              We keep it simple and delicious. No fuss, just great food made by family, for family.
            </p>
            <div className="hidden lg:block bg-black text-white p-6 rounded-lg rotate-2">
                <p className="font-serif text-2xl mb-2">Call In Orders</p>
                <p className="text-3xl font-bold text-truck-yellow">(512) 740-2289</p>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-y-16">
              {OFFERINGS.map((offering) => (
                <div key={offering.id} className="border-t-4 border-black pt-8 group reveal">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-3xl font-serif font-bold mb-4 md:mb-0 text-black group-hover:text-white transition-colors duration-300">
                      {offering.title}
                    </h3>
                    <p className="md:w-1/2 text-black font-medium leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};