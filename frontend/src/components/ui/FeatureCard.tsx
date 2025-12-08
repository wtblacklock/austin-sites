import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  href?: string;
}

export default function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  const content = (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
      <div className="card-body items-center text-center">
        {icon && (
          <div className="text-primary mb-4">
            {icon}
          </div>
        )}
        <h3 className="card-title">{title}</h3>
        {description && (
          <p className="opacity-70">{description}</p>
        )}
        {href && (
          <div className="card-actions mt-4">
            <span className="btn btn-primary btn-sm">Learn More</span>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
