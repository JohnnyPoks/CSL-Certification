import { Course } from "@/models";
import AppLink from "@/presentation/components/AppLink";
import { PlayIcon } from "lucide-react";

interface StartLearningProps {
  courses: Course[];
}

export default function StartLearning({ courses }: StartLearningProps) {
  const slicedCourses = courses.slice(0, 3);
  return (
    <section className="flex flex-col gap-4 p-6">
      <div className="grid lg:flex justify-between items-center">
        <h2 className="text-3xl font-bold">Let's start learning</h2>
        <AppLink to="/home/my-courses" className="font-semibold">
          My learning
        </AppLink>
      </div>
      <div className="grid lg:flex gap-2 lg:gap-4">
        {slicedCourses.map((course) => (
          <AppLink
            key={course.id}
            to={`/course/${course.id}`}
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div className="grid grid-cols-[120px_1fr] w-full max-w-[400px] border border-gray-300">
              <div className="relative w-[120px] h-[146px] overflow-hidden">
                <img
                  src={course.thumbnailURL}
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center">
                  <PlayIcon className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex flex-col gap-2 p-2 lg:px-4 overflow-hidden">
                <span className="text-sm text-gray-500 truncate font-semibold">
                  {course.shortDescription}
                </span>
                <h3 className="text-md font-bold font-sans">{course.title}</h3>
                <span className="text-xs text-gray-500 mt-auto">
                  Lecture • {course.estimatedDuration} minutes
                </span>
              </div>
            </div>
          </AppLink>
        ))}
      </div>
    </section>
  );
}
