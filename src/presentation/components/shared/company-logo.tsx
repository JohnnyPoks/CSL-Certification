interface CompanyLogoProps {
  name: string;
  logo: string;
  className?: string;
}

export default function CompanyLogo({ name, logo, className = "" }: CompanyLogoProps) {
  return (
    <img
      src={logo}
      alt={name}
      className={`h-8 grayscale opacity-80 hover:opacity-100 transition-opacity ${className}`}
    />
  );
} 