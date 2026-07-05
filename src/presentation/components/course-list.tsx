import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Course } from "@/models";
import LessonCardWithHoverCard from "./lesson-card";

interface CourseListProps {
  courses: Course[];
  title?: string;
  subtitle?: string;
}

export default function CourseList({
  courses,
  title,
  subtitle,
}: CourseListProps) {
  return (
    <section className="flex flex-col gap-4 px-4 sm:px-3 2xl:px-0">
      {title && <h2 className="lg:text-3xl text-2xl font-bold">{title}</h2>}
      {subtitle && (
        <h3
          className={
            title
              ? "font-semibold lg:text-2xl text-xl font-sans"
              : "font-bold lg:text-2xl text-xl font-sans"
          }
        >
          {subtitle}
        </h3>
      )}
      <Carousel>
        <CarouselContent>
          {courses.map((course) => (
            <CarouselItem
              className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
              key={course.id}
            >
              <LessonCardWithHoverCard course={course} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute md:-left-5 left-0 top-1/3 -translate-y-1/2 w-10 h-10 bg-chelsea-gem text-white hover:bg-chelsea-gem/70 font-bold text-xl hover:text-white" />
        <CarouselNext className="absolute md:-right-5 right-0 top-1/3 -translate-y-1/2 w-10 h-10 bg-chelsea-gem text-white hover:bg-chelsea-gem/70 font-bold text-xl hover:text-white" />
      </Carousel>
    </section>
  );
}
