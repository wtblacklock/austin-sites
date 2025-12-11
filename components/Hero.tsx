import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-truck-yellow">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=2919&auto=format&fit=crop" 
          alt="Taco Truck Vibe" 
          className="w-full h-full object-cover opacity-30 mix-blend-multiply grayscale"
        />
        <div className="absolute inset-0 bg-truck-yellow/70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl animate-fade-in-up">
        <h2 className="text-truck-red font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
          Est. in 2018
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black leading-[0.9] tracking-tight mb-8 text-black">
          TACO ABOUT <br/> <span className="text-white drop-shadow-lg stroke-black">SOME GOOD FOOD</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-black max-w-xl mx-auto mb-12 leading-relaxed">
          Beloved taco trailer serving fresh breakfast tacos and authentic street tacos with locally sourced ingredients. Located at 3008 W Slaughter Ln.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button variant="primary" className="rounded-md">
            Check the Menu
          </Button>
          <Button variant="outline" className="rounded-md border-black text-black hover:bg-black hover:text-truck-yellow">
            Call in Order
          </Button>
        </div>
      </div>
    </section>
  );
};