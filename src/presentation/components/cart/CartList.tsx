import { Course } from '@/models';
import { CartItem } from './CartItem';

interface CartListProps {
  title?: string;
  items: Course[];
  onRemove: (courseId: string) => void;
  onSaveForLater?: (courseId: string) => void;
  onMoveToWishlist?: (courseId: string) => void;
  onMoveToCart?: (courseId: string) => void;
}

export const CartList = ({ 
  title,
  items,
  onRemove,
  onSaveForLater,
  onMoveToWishlist,
  onMoveToCart
}: CartListProps) => {
  if (items.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        Aucun cours dans cette section
      </div>
    );
  }

  return (
    <div>
      {title && (
        <div className="p-4 border-b border-gray-200">
          <span className="font-semibold">{title}</span>
        </div>
      )}
      
      <div className="divide-y divide-gray-200">
        {items.map((course) => (
          <CartItem
            key={course.id}
            course={course}
            onRemove={onRemove}
            onSaveForLater={onSaveForLater}
            onMoveToWishlist={onMoveToWishlist}
            onMoveToCart={onMoveToCart}
          />
        ))}
      </div>
    </div>
  );
}; 