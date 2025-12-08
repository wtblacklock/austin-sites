import { foodTruck } from "@/config/foodTruck.config";
import Image from "next/image";
import Link from "next/link";

export function InstagramGrid() {
  const { instagramFeed, instagramHandle, instagramUrl } = foodTruck;

  return (
    <section className="section-padding bg-[#FF000D]">
      <div className="container-grid">
        {/* Header - Left aligned */}
        <div className="mb-12">
          <h2 className="font-chunky text-4xl sm:text-5xl md:text-6xl text-white mb-4">
            Follow Along
          </h2>
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white/80 font-semibold hover:text-white hover:underline transition-colors"
          >
            {instagramHandle}
          </Link>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {instagramFeed.map((post, index) => (
            <Link
              key={index}
              href={post.href || instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover"
              />
              {/* Red overlay with arrow - top right, 200% bigger */}
              <div className="absolute top-3 right-3 bg-[#FF000D] text-white w-20 h-20 flex items-center justify-center text-5xl font-bold rounded-sm">
                ↗
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
