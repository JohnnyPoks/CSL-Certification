import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "@/models";
import { toast } from "sonner";

interface CartState {
  courses: Course[];
  savedForLater: Course[];
  cartTotalPrice: number;
}

const initialState: CartState = {
  courses: [],
  savedForLater: [],
  cartTotalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Course>) => {
      const exists = state.courses.some(
        (course) => course.id === action.payload.id
      );
      if (exists) {
        toast.error("Ce cours est déjà dans votre panier");
        return;
      }
      state.courses.push(action.payload);
      state.cartTotalPrice +=
        action.payload.discountPrice || action.payload.price;
      toast.success("Cours ajouté au panier");
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const course = state.courses.find((c) => c.id === action.payload);
      if (course) {
        state.cartTotalPrice -= course.discountPrice || course.price;
      }
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
      toast.success("Cours retiré du panier");
    },
    clearCart: (state) => {
      state.courses = [];
      state.cartTotalPrice = 0;
      toast.success("Panier vidé");
    },
    saveForLater: (state, action: PayloadAction<string>) => {
      const course = state.courses.find((c) => c.id === action.payload);
      if (course) {
        state.cartTotalPrice -= course.discountPrice || course.price;
        state.courses = state.courses.filter((c) => c.id !== action.payload);
        state.savedForLater.push(course);
        toast.success("Cours sauvegardé pour plus tard");
      }
    },
    // moveToWishlist: (
    //   state,
    //   action: PayloadAction<{
    //     course: Course;
    //     addToWishlist: (course: Course) => void;
    //   }>
    // ) => {
    //   const { course, addToWishlist } = action.payload;
    //   if (course) {
    //     state.cartTotalPrice -= course.discountPrice || course.price;
    //     state.courses = state.courses.filter((c) => c.id !== course.id);
    //     addToWishlist(course);
    //     toast.success("Cours déplacé vers la liste de souhaits");
    //   }
    // },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  saveForLater,
  // moveToWishlist,
} = cartSlice.actions;
export default cartSlice.reducer;
