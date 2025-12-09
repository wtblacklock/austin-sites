import { foodTruck } from "@/config/foodTruck.config";
import Image from "next/image";

export function About() {
  const { name } = foodTruck;

  return (
    <section id="about" className="bg-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text - Sticky */}
          <div className="md:sticky md:top-32">
            <h2 className="font-chunky text-3xl md:text-4xl text-[#FF6B00] mb-6">
              Our Trailer
            </h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              {name} is a beloved taco trailer in South Austin that specializes in serving 
              delicious breakfast tacos and authentic street tacos. Our tacos are made with 
              fresh, locally sourced ingredients and perfectly seasoned, ensuring each bite 
              is packed with flavor.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Whether you're craving a classic bacon, egg & cheese breakfast taco or something 
              more adventurous like our pastor tacos with fresh cilantro and onion, {name} has 
              something for everyone. With friendly service and a cozy trailer vibe, we're the 
              perfect spot to grab delicious tacos with friends and family.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&h=600&fit=crop"
              alt="Delicious tacos"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
