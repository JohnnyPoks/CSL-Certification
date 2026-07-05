import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme/theme-slice";
import wishlistReducer from "./slices/wishlist/wishlist-slice";
import cartReducer from "./slices/cart/cart-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredPaths: ["wishlist.courses.createdAt", "cart.courses.createdAt"] },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
