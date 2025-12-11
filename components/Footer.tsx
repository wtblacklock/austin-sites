import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 md:py-24 overflow-hidden border-t-8 border-truck-yellow">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative">
           <div>
              <h2 className="text-[12vw] font-serif font-black leading-none text-truck-yellow select-none whitespace-nowrap -ml-2 md:-ml-4">
                TACO BELLA'S
              </h2>
              <p className="text-xl md:text-2xl font-medium mt-4 max-w-lg">
                South Austin's favorite spot for breakfast tacos and lunch plates.
              </p>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-800">
           <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 md:mb-0">
             <span className="flex items-center gap-2"><MapPin size={16} /> 3008 W Slaughter Ln</span>
             <span>(512) 740-2289</span>
           </div>

           <div className="flex items-center gap-6">
             <a href="#" className="hover:text-truck-yellow transition-colors transform hover:-translate-y-1 duration-300"><Instagram size={24} /></a>
           </div>
        </div>
      </div>
    </footer>
  );
};