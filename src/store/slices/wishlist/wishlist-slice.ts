import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "@/models";
import { toast } from "sonner";

interface WishlistState {
  courses: Course[];
}

const initialState: WishlistState = {
  courses: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Course>) => {
      console.log("Adding to wishlist:", action.payload);
      const exists = state.courses.some(
        (course) => course.id === action.payload.id
      );
      if (exists) {
        toast.error("Ce cours est déjà dans votre liste de souhaits");
        return;
      }
      state.courses.push(action.payload);
      toast.success("Cours ajouté à la liste de souhaits");
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
      toast.success("Cours retiré de la liste de souhaits");
    },
    moveToCart: (
      state,
      action: PayloadAction<{
        course: Course;
        addToCart: (course: Course) => void;
      }>
    ) => {
      const { course, addToCart } = action.payload;
      addToCart(course);
      state.courses = state.courses.filter((c) => c.id !== course.id);
      toast.success("Cours déplacé vers le panier");
    },
    clearWishlist: (state) => {
      state.courses = [];
      toast.success("Liste de souhaits vidée");
    },
  },
});

export const { addToWishlist, removeFromWishlist, moveToCart, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
