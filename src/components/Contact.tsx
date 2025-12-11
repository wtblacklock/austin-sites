import React from 'react';
import { Button } from './Button';
import { Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif font-black mb-10 text-black">
              Visit Us.
            </h2>
            <p className="text-xl font-medium text-gray-700 mb-12 max-w-md">
              Located in the parking lot of the Shell Gas station on the corner of Slaughter and Westgate.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-4">
                <div className="bg-truck-yellow p-3 rounded-full">
                    <MapPin size={24} className="text-black" />
                </div>
                <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Location</span>
                    <span className="block text-2xl font-serif font-bold">3008 W Slaughter Ln</span>
                    <span className="block text-gray-600">Austin, TX 78748</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-truck-yellow p-3 rounded-full">
                    <Phone size={24} className="text-black" />
                </div>
                <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Call Ahead</span>
                    <a href="tel:5127402289" className="block text-2xl font-serif font-bold hover:text-truck-red transition-colors">(512) 740-2289</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-truck-yellow p-3 rounded-full">
                    <Clock size={24} className="text-black" />
                </div>
                <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Hours</span>
                    <span className="block text-2xl font-serif font-bold">7:00 AM - 2:00 PM</span>
                    <span className="block text-gray-600">Monday - Saturday</span>
                    <span className="block text-truck-red font-medium text-sm mt-1">Closed Sunday</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 md:p-12 rounded-lg border-2 border-dashed border-gray-300">
            <h3 className="text-2xl font-serif font-bold mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-truck-red transition-colors bg-transparent font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-truck-red transition-colors bg-transparent font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-truck-red transition-colors bg-transparent font-medium"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-truck-red transition-colors bg-transparent resize-none font-medium"
                  placeholder="Ask about catering or large orders..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full mt-4">
                Contact Us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};