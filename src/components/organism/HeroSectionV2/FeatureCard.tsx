interface FeatureCardProps {
  label: string;
  title: string;
  href: string;
  className?: string;
}

export const FeatureCard = ({
  label,
  title,
  href,
  className,
}: FeatureCardProps) => (
  <a href={href} className={className}>
    <span>{label}</span>
    <p>{title}</p>
  </a>
);
