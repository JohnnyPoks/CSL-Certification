import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string) {
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