import { useState } from "react";
import { Course } from "@/models";
import PlanTabs from "./plan-tabs";
import PersonalPlan from "./personal-plan";
import BusinessPromo from "./business-promo";
import { useAppDispatch } from "@/hooks/redux";
import { addToCart } from "@/store/slices/cart/cart-slice";
import { addToWishlist } from "@/store/slices/wishlist/wishlist-slice";

interface CourseCartProps {
  course: Course;
}

export default function CourseCart({ course }: CourseCartProps) {
  const [activeTab, setActiveTab] = useState<"personal" | "teams">("personal");
  const [appliedCoupon, setAppliedCoupon] = useState<string>();

  const dispatch = useAppDispatch();

  // Handlers
  const handleAddToCart = () => {
    console.log("Adding to cart:", course.id);
    dispatch(addToCart(course));
  };
  const handleAddToWishlist = () => {
    console.log("Adding to wishlist:", course.id);
    dispatch(addToWishlist(course));
  };

  const handleApplyCoupon = (coupon: string) => {
    setAppliedCoupon(coupon);
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(undefined);
  };

  const handleTabChange = (tab: "personal" | "teams") => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full lg:w-[380px] h-fit bg-white border border-gray-200 rounded-lg shadow-lg mx-auto lg:mx-0">
      <div className="sticky top-4">
        <PlanTabs activeTab={activeTab} onTabChange={handleTabChange} />
        <div className="p-4 sm:p-6">
          {activeTab === "personal" ? (
            <PersonalPlan
              price={course.price}
              discountPrice={course.discountPrice}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              appliedCoupon={appliedCoupon}
              onApplyCoupon={handleApplyCoupon}
              onRemoveCoupon={handleRemoveCoupon}
            />
          ) : (
            <BusinessPromo />
          )}
        </div>
      </div>
    </div>
  );
}
