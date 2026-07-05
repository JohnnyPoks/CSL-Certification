import { Badge } from "@/components/ui/badge";

interface TopicBadgeProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function TopicBadge({ label, onClick, className = "" }: TopicBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={`rounded-full px-4 py-2 hover:bg-green-pea/10 cursor-pointer border-green-pea text-green-pea ${className}`}
      onClick={onClick}
    >
      {label}
    </Badge>
  );
} 