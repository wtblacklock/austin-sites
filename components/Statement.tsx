import React, { useEffect, useRef, useState } from 'react';
import { Star, Play, X } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Statement: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = 'https://v45.tiktokcdn-us.com/187e81e757175a10454fa0449413ab5e/693dc147/video/tos/useast5/tos-useast5-pve-0068-tx/o4Fkjb2nWAgmDD6QEfExFRGBS6bfEsyyEt3gID/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2842&bt=1421&cs=0&ds=3&ft=4KLxRMzm8Zmo0izqNx4jVo~DdpWrKsd.&mime_type=video_mp4&qs=0&rc=aTpkNGVpZzNoZzM6NDdmOkBpajZka3k5cmhrdzMzZzczNEAvNDA2MS5jNWMxLzBgLzJeYSNvYDNqMmRrZmFgLS1kMS9zcw%3D%3D&vvpl=1&l=20251211193815F1BE96D5899F1213B883&btag=e00095000';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="philosophy" className="py-32 md:py-48 bg-truck-red text-white flex items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div ref={ref} className="max-w-4xl reveal relative z-10">
          {/* TikTok Hero Image with Play Icon */}
          <div className="flex justify-center mb-8">
            <div 
              className="relative cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src="/images/tiktok-hero.png" 
                alt="TikTok Video" 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg group-hover:bg-black/40 transition-colors">
                <div className="bg-white/90 rounded-full p-4 md:p-6 group-hover:bg-white transition-colors">
                  <Play size={40} className="text-truck-red fill-truck-red ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mb-8 text-truck-yellow">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={32} />)}
          </div>
          <p className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            "{TESTIMONIALS[0].quote}"
          </p>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-truck-yellow">
            — {TESTIMONIALS[0].author}
          </p>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Close video"
            >
              <X size={24} className="text-white" />
            </button>
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-auto max-h-[90vh]"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};