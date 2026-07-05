import { generateMockCourses } from "@/data/mock-data";
import BusinessPromoBanner from "@/presentation/components/business-promo-banner";
import Hero from "@/presentation/components/home/hero";
import CourseList from "@/presentation/components/course-list";
import { useCallback } from "react";
import StartLearning from "@/presentation/components/home/learning/start-learning";

export default function HomePage() {
  const courses = useCallback(generateMockCourses, []);

  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      <Hero />
      <StartLearning courses={courses()} />
      <div className="p-0 m-0 md:px-12 px-6">
        <BusinessPromoBanner />
      </div>
      <CourseList
        courses={courses().sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))}
        title="What to learn next"
        subtitle="Recommended for you"
      />
      <CourseList
        courses={courses().sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))}
        subtitle="Because you searched for “figma ui ux design”"
      />
      <CourseList
        courses={courses().sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))}
        subtitle="Newest courses in Google Flutter"
      />
      <CourseList
        courses={courses().sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))}
        subtitle="Newest courses in Google Flutter"
      />
    </div>
  );
}
