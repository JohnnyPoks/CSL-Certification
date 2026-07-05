import { Course } from "@/models";
import StarRating from "../common/StarRating";

interface CartItemProps {
  course: Course;
  onRemove: (courseId: string) => void;
  onSaveForLater?: (courseId: string) => void;
  onMoveToWishlist?: (courseId: string) => void;
  onMoveToCart?: (courseId: string) => void;
}

export const CartItem = ({
  course,
  onRemove,
  onSaveForLater,
  onMoveToWishlist,
  onMoveToCart,
}: CartItemProps) => {
  return (
    <div className="flex gap-4 p-4">
      <div className="w-32 h-20 relative rounded-lg overflow-hidden">
        <img
          src={course.thumbnailURL}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-grow">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <p className="text-sm text-gray-600">Par {course.instructorId}</p>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm">{course.rating?.toFixed(1)}</span>
          <StarRating rating={course.rating || 0} />
          <span className="text-sm text-gray-600">
            ({course.totalRatings?.toLocaleString()} évaluations)
          </span>
        </div>

        <div className="text-sm text-gray-600">
          {Math.round(course.estimatedDuration / 60)} heures •{" "}
          {course.sections?.length} cours • {course.level}
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="text-right">
          {course.discountPrice && (
            <span className="text-lg font-bold text-purple-600">
              {course.discountPrice.toFixed(2)}€
            </span>
          )}
          <span
            className={`${
              course.discountPrice
                ? "text-sm line-through text-gray-500 ml-2"
                : "text-lg font-bold text-purple-600"
            }`}
          >
            {course.price.toFixed(2)}€
          </span>
        </div>

        <button
          onClick={() => onRemove(course.id)}
          className="text-sm text-purple-600 hover:text-purple-800"
        >
          Supprimer
        </button>

        {onSaveForLater && (
          <button
            onClick={() => onSaveForLater(course.id)}
            className="text-sm text-purple-600 hover:text-purple-800"
          >
            Sauvegarder pour plus tard
          </button>
        )}

        {onMoveToWishlist && (
          <button
            onClick={() => onMoveToWishlist(course.id)}
            className="text-sm text-purple-600 hover:text-purple-800"
          >
            Déplacer vers la liste de souhaits
          </button>
        )}

        {onMoveToCart && (
          <button
            onClick={() => onMoveToCart(course.id)}
            className="text-sm text-purple-600 hover:text-purple-800"
          >
            Déplacer vers le panier
          </button>
        )}
      </div>
    </div>
  );
};
