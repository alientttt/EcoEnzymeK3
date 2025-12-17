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
    <span className="text-lg font-medium">{label}</span>
    <p className="text-xl text-[#37723B] font-semibold">{title}</p>
  </a>
);
