import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  text: string;
  className?: string;
  iconClassName?: string;
}

export default function FeatureItem({ icon: Icon, text, className = "", iconClassName = "" }: FeatureItemProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Icon className={`w-5 h-5 text-green-pea ${iconClassName}`} />
      <span>{text}</span>
    </div>
  );
} 