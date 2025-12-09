import { foodTruck } from "@/config/foodTruck.config";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { primaryLocation, phone, instagramUrl, instagramHandle } = foodTruck;

  // Encode address for embed URL
  const encodedAddress = encodeURIComponent(primaryLocation.address);

  return (
    <section id="contact" className="bg-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-chunky text-3xl md:text-4xl text-[#FF6B00] mb-12 text-center">
          Contact Us or Visit Us
        </h2>

        <div className="grid md:grid-cols-4 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div>
              <h3 className="font-chunky text-lg text-white mb-4 uppercase tracking-wider">Location</h3>
              <p className="text-white/70 mb-2">{primaryLocation.address}</p>
              <Link 
                href={primaryLocation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6B00] hover:underline text-sm"
              >
                Get Directions →
              </Link>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-chunky text-lg text-white mb-4 uppercase tracking-wider">Hours</h3>
              <p className="text-white/70 mb-1">Monday – Saturday</p>
              <p className="text-white/70 mb-1">7:00 AM — 2:00 PM</p>
              <p className="text-white/70">Closed on Sundays</p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-chunky text-lg text-white mb-4 uppercase tracking-wider">Contact</h3>
              <p className="text-white/70 mb-2">
                <a href={`tel:${phone}`} className="hover:text-[#FF6B00] transition-colors">
                  {phone}
                </a>
              </p>
              <p className="text-white/70">
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6B00] transition-colors"
                >
                  {instagramHandle}
                </a>
              </p>
            </div>

            {/* Order Ahead Button */}
            <div className="pt-4">
              <Link href="tel:512-740-2289">
                <Button className="w-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-button text-lg px-8 py-6 h-auto flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Order Ahead
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Grayscale Map - 3/4 width */}
          <div className="md:col-span-3 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Taco Bella's Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
