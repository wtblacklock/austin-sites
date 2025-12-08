import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  href?: string;
  price?: string;
}

export default function ServiceCard({ title, description, imageUrl, href, price }: ServiceCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      {imageUrl && (
        <figure className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </figure>
      )}
      <div className="card-body">
        <h3 className="card-title">
          {title}
          {price && <span className="badge badge-secondary">{price}</span>}
        </h3>
        <p className="opacity-70">{description}</p>
        {href && (
          <div className="card-actions justify-end">
            <Link href={href} className="btn btn-primary">
              Learn More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

