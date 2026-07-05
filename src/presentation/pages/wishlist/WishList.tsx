import { Course } from "@/models";
import LessonCardWithHoverCard from "@/presentation/components/lesson-card";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addToCart } from "@/store/slices/cart/cart-slice";
import {
  removeFromWishlist,
  moveToCart,
} from "@/store/slices/wishlist/wishlist-slice";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";

export default function WishList() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();
  const wishlistCourses = useAppSelector(
    (state: RootState) => state.wishlist.courses
  );

  const handleRemoveFromWishlist = (courseId: string) => {
    dispatch(removeFromWishlist(courseId));
  };

  const handleMoveToCart = (course: Course) => {
    dispatch(moveToCart({ course, addToCart: (c) => dispatch(addToCart(c)) }));
  };

  const filteredCourses = useMemo(() => {
    return wishlistCourses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [wishlistCourses, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Ma Liste de Souhaits</h1>
        <div className="flex gap-4">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Rechercher mes cours"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10"
            />
            <button
              className="absolute inset-y-0 right-0 px-3 flex items-center"
              aria-label="Rechercher"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Grille de cours */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="relative group">
            <LessonCardWithHoverCard
              course={course}
              onRemove={() => handleRemoveFromWishlist(course.id)}
            />
            <Button
              onClick={() => handleMoveToCart(course)}
              className="absolute bottom-4 right-4 bg-green-pea text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Ajouter au panier
            </Button>
          </div>
        ))}
      </div>

      {/* État vide */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Votre liste de souhaits est vide
          </h3>
          <p className="text-gray-500">
            Explorez les cours et ajoutez-les à votre liste de souhaits pour les
            sauvegarder pour plus tard.
          </p>
        </div>
      )}
    </div>
  );
}
