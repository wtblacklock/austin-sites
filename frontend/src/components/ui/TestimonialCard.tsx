import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatarUrl,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        {/* Star Rating */}
        <div className="rating rating-sm mb-2">
          {[...Array(5)].map((_, i) => (
            <input
              key={i}
              type="radio"
              name={`rating-${author}`}
              className="mask mask-star-2 bg-warning"
              checked={i < rating}
              readOnly
            />
          ))}
        </div>

        {/* Quote */}
        <p className="italic opacity-80">&ldquo;{quote}&rdquo;</p>

        {/* Author */}
        <div className="flex items-center gap-4 mt-4">
          {avatarUrl ? (
            <div className="avatar">
              <div className="w-12 rounded-full">
                <Image src={avatarUrl} alt={author} width={48} height={48} />
              </div>
            </div>
          ) : (
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content w-12 rounded-full">
                <span className="text-lg">{author.charAt(0)}</span>
              </div>
            </div>
          )}
          <div>
            <p className="font-semibold">{author}</p>
            {(role || company) && (
              <p className="text-sm opacity-60">
                {role}{role && company && ' at '}{company}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

