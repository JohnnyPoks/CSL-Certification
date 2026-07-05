import { AxiosInstance } from "axios";
import { Course } from "@/models";

export default class CourseRepository {
  constructor(
    private api: AxiosInstance,
    private courseRoute: string = "/courses"
  ) {}

  async getCourses() {
    const response = await this.api.get(this.courseRoute);
    return response.data;
  }

  async getCourse(courseId: string) {
    const response = await this.api.get(`${this.courseRoute}/${courseId}`);
    return response.data;
  }

  async addCourse(course: Course) {
    const response = await this.api.post(this.courseRoute, course);
    return response.data;
  }

  async deleteCourse(courseId: string) {
    const response = await this.api.delete(`${this.courseRoute}/${courseId}`);
    return response.data;
  }
}
