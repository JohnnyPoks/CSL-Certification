import { QueryClient, useMutation } from "@tanstack/react-query";
import WishlistRepository from "../repos/wishlist";

export default class WishlistUseCase {
  constructor(
    private wishlistRepository: WishlistRepository,
    private queryClient: QueryClient
  ) {}

  async getWishlistCourses() {
    const wishlistCourses = await this.queryClient.ensureQueryData({
      queryKey: ["wishlist-courses", "get"],
      queryFn: () => this.wishlistRepository.getWishlistCourses(),
    });
    return wishlistCourses;
  }

  async addCourseToWishlist(courseId: string) {
    const addCourseToWishlistMutation = useMutation({
      mutationFn: () => this.wishlistRepository.addCourseToWishlist(courseId),
      onSuccess: () => {
        // Invalidate and refetch
        this.queryClient.invalidateQueries({
          queryKey: ["wishlist-courses", "get"],
        });
      },
    });
    return addCourseToWishlistMutation;
  }

  async removeCourseFromWishlist(courseId: string) {
    const removeCourseFromWishlistMutation = useMutation({
      mutationFn: () => this.wishlistRepository.removeCourseFromWishlist(courseId),
    });
    return removeCourseFromWishlistMutation;
  }
}
