import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { CartList } from "@/presentation/components/cart/CartList";
import { CartSummary } from "@/presentation/components/cart/CartSummary";
import { Promotions } from "@/presentation/components/cart/Promotions";
import {
  removeFromCart,
  saveForLater,
  addToCart,
} from "@/store/slices/cart/cart-slice";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/store/slices/wishlist/wishlist-slice";
import { useState } from "react";

export default function Cart() {
  const [appliedCoupon, setAppliedCoupon] = useState<string>();
  const cartItems = useAppSelector((state) => state.cart.courses);
  const savedItems = useAppSelector((state) => state.cart.savedForLater);
  const wishlistItems = useAppSelector((state) => state.wishlist.courses);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (courseId: string) => {
    dispatch(removeFromCart(courseId));
  };

  const handleSaveForLater = (courseId: string) => {
    dispatch(saveForLater(courseId));
  };

  const handleMoveToWishlist = (courseId: string) => {
    const course = cartItems.find((c) => c.id === courseId);
    if (course) {
      dispatch(removeFromCart(courseId));
      dispatch(addToWishlist(course));
    }
  };

  const handleApplyCoupon = (code: string) => {
    setAppliedCoupon(code);
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(undefined);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (item.discountPrice || item.price),
    0
  );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Panier d'achat
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Cart Section */}
          <div className="bg-white rounded-lg shadow-sm">
            <CartList
              title={`${cartItems.length} Cours dans le panier`}
              items={cartItems}
              onRemove={handleRemoveFromCart}
              onSaveForLater={handleSaveForLater}
              onMoveToWishlist={handleMoveToWishlist}
            />
          </div>

          {/* Saved for Later Section */}
          {savedItems.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold">Sauvegardé pour plus tard</h2>
              </div>
              <CartList
                items={savedItems}
                onRemove={handleRemoveFromCart}
                onMoveToCart={(courseId) => {
                  const course = savedItems.find((c) => c.id === courseId);
                  if (course) {
                    dispatch(removeFromCart(courseId));
                    dispatch(addToCart(course));
                  }
                }}
              />
            </div>
          )}

          {/* Recently Wishlisted Section */}
          {wishlistItems.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold">
                  Récemment ajouté à la liste de souhaits
                </h2>
              </div>
              <CartList
                items={wishlistItems}
                onRemove={(courseId) => dispatch(removeFromWishlist(courseId))}
                onMoveToCart={(courseId) => {
                  const course = wishlistItems.find((c) => c.id === courseId);
                  if (course) {
                    dispatch(removeFromWishlist(courseId));
                    dispatch(addToCart(course));
                  }
                }}
              />
            </div>
          )}

          {/* Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="lg:w-[380px] lg:ml-auto">
              <div className="bg-white rounded-lg shadow-sm">
                <CartSummary total={total} itemCount={cartItems.length} />
                <Promotions
                  appliedCoupon={appliedCoupon}
                  onApplyCoupon={handleApplyCoupon}
                  onRemoveCoupon={handleRemoveCoupon}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
