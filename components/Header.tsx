import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Story', href: '#story' },
    { name: 'Details', href: '#catering' },
    { name: 'Visit', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-truck-yellow py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="z-50 relative group">
          <a href="#" className="block">
            {/* Logo Image - Black Truck Logo */}
            <img 
              src="/images/truck-logo.png" 
              alt="Taco Bella's Logo" 
              className="h-12 w-auto transition-all duration-300"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest hover:text-white transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-black'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-truck-red text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors duration-300 shadow-sm">
            Call Order
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden z-50 focus:outline-none ${isMobileMenuOpen ? 'text-black' : (isScrolled ? 'text-black' : 'text-black')}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-truck-yellow z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-5xl font-serif font-bold text-black hover:text-white transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-12">
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-2"
            >
              <span>Get Directions</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};