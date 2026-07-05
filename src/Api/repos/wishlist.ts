import { AxiosInstance } from "axios";

export default class WishlistRepository {
  constructor(
    private api: AxiosInstance,
    private wishlistRoute: string = "/wishlist"
  ) {}

  async getWishlistCourses() {
    const response = await this.api.get(this.wishlistRoute);
    return response.data;
  }

  async addCourseToWishlist(courseId: string) {
    const response = await this.api.post(this.wishlistRoute, { courseId });
    return response.data;
  }

  async removeCourseFromWishlist(courseId: string) {
    const response = await this.api.delete(`${this.wishlistRoute}/${courseId}`);
    return response.data;
  }
}
