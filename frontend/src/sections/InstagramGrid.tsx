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
          <h2 className="font-chunky text-4xl sm:text-5xl md:text-6xl text-white mb-4 flex items-center gap-4">
            Follow Along
            <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
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
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover overlay only */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View on Instagram
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
