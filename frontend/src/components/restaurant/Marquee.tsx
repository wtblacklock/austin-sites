export function Marquee({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`overflow-hidden bg-[#FF6B00] py-4 ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-chunky text-2xl md:text-3xl text-white mx-8">
            {text} <span className="text-white/50">〰️</span>
          </span>
        ))}
      </div>
    </div>
  );
}

