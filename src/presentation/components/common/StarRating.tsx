interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex text-yellow-400">
      {[...Array(maxRating)].map((_, index) => {
        // const starValue = index + 1;
        const fillPercentage = Math.min(
          Math.max((rating - index) * 100, 0),
          100
        );

        return (
          <div key={index} className="relative">
            {/* Empty star (background) */}
            <span className="text-gray-300">★</span>

            {/* Filled star (overlay) */}
            <span
              className="absolute inset-0 overflow-hidden text-yellow-400"
              style={{ width: `${fillPercentage}%` }}
            >
              ★
            </span>
          </div>
        );
      })}
    </div>
  );
}
