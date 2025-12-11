import React from 'react';

export const History: React.FC = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-studio-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute top-0 left-0 w-full h-full bg-truck-yellow rounded-lg transform -translate-x-4 translate-y-4 z-0"></div>
             <img 
              src="/images/bella.webp" 
              alt="Owner cooking" 
              className="w-full h-[500px] md:h-[700px] object-cover rounded-lg shadow-xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-truck-red mb-4">OUR STORY</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Taco Bella's is a beloved taco trailer in South Austin that specializes in serving delicious breakfast tacos and authentic street tacos. Our tacos are made with fresh, locally sourced ingredients and perfectly seasoned, ensuring each bite is packed with flavor.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether you're craving a classic bacon, egg & cheese breakfast taco or something more adventurous like our pastor tacos with fresh cilantro and onion, Taco Bella's has something for everyone. With friendly service and a cozy trailer vibe, we're the perfect spot to grab delicious tacos with friends and family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};