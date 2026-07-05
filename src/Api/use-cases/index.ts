import { useQueryClient } from "@tanstack/react-query";
import { wishlistRepository } from "../repos";
import WishlistUseCase from "./wishlist";

const queryClient = useQueryClient();
export const wishlistUseCase = new WishlistUseCase(
  wishlistRepository,
  queryClient
);
