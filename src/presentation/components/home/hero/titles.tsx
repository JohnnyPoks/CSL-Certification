import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TitlesProps {
  name: string;
  title: string;
  avatarUrl?: string;
}

export default function Titles({ name, title, avatarUrl }: TitlesProps) {
  const displayName = getLimitedName(name);

  return (
    <div className="flex gap-4 lg:gap-6 p-4 lg:p-6">
      <Avatar className="w-16 h-16">
        {avatarUrl && <AvatarImage src={avatarUrl} alt={displayName} />}
        <AvatarFallback className="bg-black font-semibold text-2xl text-white">
          {getInitials(displayName)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-sans">
          Welcome back, {displayName}
        </h1>
        <span className="text-muted-foreground text-start text-sm md:text-base">
          {title}
        </span>
      </div>
    </div>
  );
}

function getLimitedName(name: string): string {
  if (!name) return "";

  const parts = name.split(" ").filter(Boolean);

  if (parts.length > 2) {
    return parts.slice(0, 2).join(" ");
  }

  return name;
}

function getInitials(name: string) {
  if (!name) return "";

  const parts = name.split(" ").filter(Boolean);

  if (parts.length > 1) {
    return parts
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");
  }

  return name.length >= 2 ? name.slice(0, 2).toUpperCase() : name.toUpperCase();
}
