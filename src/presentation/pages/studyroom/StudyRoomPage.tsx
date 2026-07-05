import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Menu } from "lucide-react";

// Components
import VideoPlayer from "../../components/studyroom/VideoPlayer";
import CourseNavigation from "../../components/studyroom/CourseNavigation";
import CourseTabs from "../../components/studyroom/CourseTabs";

// Hooks
import { useCourse } from "@/hooks/useCourse";

export default function StudyRoomPage() {
  const { courseId } = useParams();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<number>(0);
  const { course, loading, error } = useCourse(courseId || "course-1");

  // Close navigation on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLessonComplete = (lessonIndex: number) => {
    console.log(`Lesson ${lessonIndex} completed`);
    if (course && lessonIndex < course.lessons.length - 1) {
      setCurrentLesson(lessonIndex + 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-pea"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">
          Error loading course: {error.message}
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Course not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <button
          onClick={() => setIsNavOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold truncate">{course.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0">
        {/* Main Content */}
        <div className="flex flex-col min-h-[calc(100vh-64px)] lg:min-h-screen">
          <VideoPlayer
            videoUrl={course.sections[0].items?.[currentLesson]?.videoUrl || ""}
            onComplete={() => handleLessonComplete(currentLesson)}
          />
          <CourseTabs course={course} currentLesson={currentLesson} />
        </div>

        {/* Course Navigation Sidebar */}
        <CourseNavigation
          isOpen={isNavOpen}
          onClose={() => setIsNavOpen(false)}
          currentLesson={currentLesson}
          onLessonSelect={setCurrentLesson}
          course={course}
        />
      </div>
    </div>
  );
}
