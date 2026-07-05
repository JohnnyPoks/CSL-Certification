import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

interface CourseCardProps {
  id: string;
  title: string;
  thumbnail: string;
  rating: number;
  students: number;
  price: number;
  totalHours: number;
  updatedAt: Date;
  isHighestRated?: boolean;
  onWishlist?: () => void;
}

export default function CourseCard({
  title,
  thumbnail,
  rating,
  students,
  price,
  totalHours,
  updatedAt,
  onWishlist,
}: CourseCardProps) {
  return (
    <div className="flex gap-4 p-4 hover:bg-gray-50 transition-colors group">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-24 h-16 object-cover rounded"
      />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm sm:text-base line-clamp-2">{title}</h3>
        
        <div className="mt-1 flex items-center gap-2 text-xs sm:text-sm text-gray-600">
          {/* Total Hours */}
          <span>{totalHours} heures au total</span>

          {/* Updated Date */}
          <span>
            • Mis à jour{" "}
            {formatDistanceToNow(updatedAt, { locale: fr, addSuffix: true })}
          </span>
        </div>

        {/* Rating and Students */}
        <div className="mt-1 flex items-center gap-2 text-xs sm:text-sm">
          <span className="font-bold text-yellow-600">{rating}</span>
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-gray-600">({students.toLocaleString()})</span>
        </div>
      </div>

      {/* Price and Wishlist */}
      <div className="flex flex-col items-end gap-2">
        <span className="font-bold">{price.toFixed(2)}€</span>
        <Button
          variant="ghost"
          size="icon"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={onWishlist}
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
} 