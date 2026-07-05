import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Course } from "@/models";
import SectionHeading from "../../shared/section-heading";
import CourseCard from "./course-card";

interface RelatedCoursesProps {
  courses: Course[];
}

export default function RelatedCourses({ courses }: RelatedCoursesProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedCourses = showAll ? courses : courses.slice(0, 5);

  const handleWishlist = (courseId: string) => {
    console.log("Adding to wishlist:", courseId);
  };

  return (
    <section className="space-y-4">
      <SectionHeading title="Les étudiants ont également acheté" />

      <div className="border border-gray-200 rounded-lg divide-y">
        {displayedCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            thumbnail={course.thumbnailURL}
            rating={course.rating || 0}
            students={course.totalStudents || 0}
            price={course.price}
            totalHours={course.estimatedDuration / 60} // Convert minutes to hours
            updatedAt={course.updatedAt.toDate()}
            onWishlist={() => handleWishlist(course.id)}
          />
        ))}
      </div>

      {courses.length > 5 && (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Afficher moins" : "Afficher plus"}
        </Button>
      )}
    </section>
  );
}
