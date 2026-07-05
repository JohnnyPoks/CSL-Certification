import CourseRepository from "./course";
import WishlistRepository from "./wishlist";
import api from "@/Api";

export const wishlistRepository = new WishlistRepository(api);
export const courseRepository = new CourseRepository(api);
