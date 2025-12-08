import Image from 'next/image';

interface Testimonial {
  quote: string;
  author?: string;
  avatar?: string;
}

interface TestimonialsStripProps {
  title?: string;
  testimonials: Testimonial[];
}

// Placeholder avatar URLs from UI Avatars or random Unsplash portraits
const placeholderAvatars = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
];

export default function TestimonialsStrip({
  title,
  testimonials,
}: TestimonialsStripProps) {
  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="container mx-auto max-w-6xl">
        {/* Section heading */}
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <div className="flex justify-center gap-1 text-warning text-2xl">
              ★★★★★
            </div>
          </div>
        )}

        {/* Testimonials grid - horizontal scroll on mobile, grid on larger screens */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-center"
            >
              <div className="card-body">
                {/* Quote icon */}
                <div className="text-primary text-4xl opacity-30 mb-2">"</div>
                
                {/* Quote text */}
                <p className="text-lg leading-relaxed mb-4">
                  {testimonial.quote}
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-base-200">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image
                        src={testimonial.avatar || placeholderAvatars[index % placeholderAvatars.length]}
                        alt={testimonial.author || 'Customer'}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author || 'Happy Customer'}</p>
                    <p className="text-xs opacity-60">Local regular</p>
                  </div>
                </div>
                
                {/* Star rating */}
                <div className="flex gap-0.5 text-warning text-sm mt-2">
                  ★★★★★
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="opacity-70 mb-4">
            Join our community of taco lovers
          </p>
          <a href="#location" className="btn btn-primary">
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
