import React, { useEffect, useRef } from 'react';
import { MENU_ITEMS } from '../constants';
import { Button } from './Button';

const useIntersectionObserver = (options = {}) => {
  const elementsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, ...options });

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [options]);

  return elementsRef;
};

export const ProjectGrid: React.FC = () => {
  const elementsRef = useIntersectionObserver();

  return (
    <section id="menu" className="py-24 md:py-32 bg-white relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-truck-yellow to-white z-0 opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal" ref={(el) => { elementsRef.current[0] = el; }}>
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-black">
              <span className="text-truck-red">Authentic</span> Menu
            </h2>
            <p className="text-gray-800 text-lg md:text-xl font-medium">
              Made fresh daily.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-24">
          {MENU_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`group cursor-pointer reveal transition-all duration-1000 ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              ref={(el) => { elementsRef.current[index + 1] = el; }}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden mb-8 relative aspect-[4/5] md:aspect-[3/4] rounded-lg shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-truck-yellow/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-serif font-bold mb-2 group-hover:text-truck-red transition-colors">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center reveal" ref={(el) => { elementsRef.current[MENU_ITEMS.length + 1] = el; }}>
            <Button variant="primary" className="px-12 py-5 text-xl tracking-widest">
                See Full Menu
            </Button>
        </div>
      </div>
    </section>
  );
};