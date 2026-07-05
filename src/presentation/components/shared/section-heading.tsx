interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
    </div>
  );
} 