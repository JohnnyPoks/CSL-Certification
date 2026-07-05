import { ChevronDown, ChevronUp, PlayCircle, FileText, X } from "lucide-react";
import { useState } from "react";
import { Course } from "@/domain/interfaces/course";

interface CourseNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  currentLesson: number;
  onLessonSelect: (index: number) => void;
  course: Course;
}

export default function CourseNavigation({
  isOpen,
  onClose,
  currentLesson,
  onLessonSelect,
  course,
}: CourseNavigationProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full lg:w-[400px] lg:relative transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      } bg-white z-40`}
    >
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Course Content</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Course Info */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold hidden lg:block">Course Content</h2>
        <p className="text-sm text-gray-600 mt-1">
          {course.sections.length} sections • {course.totalLectures} lectures
        </p>
      </div>

      {/* Sections List */}
      <div className="h-[calc(100vh-120px)] overflow-y-auto">
        <div className="divide-y">
          {course.sections.map((section, sectionIndex) => (
            <div key={section.id} className="bg-white">
              <button
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center gap-2">
                  {expandedSections.includes(section.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                  <div className="text-left">
                    <span className="font-medium block">{section.title}</span>
                    <span className="text-sm text-gray-600">
                      {section.lectures} lectures • {section.duration}min
                    </span>
                  </div>
                </div>
              </button>

              {expandedSections.includes(section.id) && (
                <div className="px-4 pb-4 space-y-2">
                  {section.items?.map((item, itemIndex) => {
                    const lessonIndex =
                      course.sections
                        .slice(0, sectionIndex)
                        .reduce((acc, s) => acc + (s.items?.length || 0), 0) +
                      itemIndex;

                    return (
                      <button
                        key={item.id}
                        className={`w-full flex items-center gap-2 p-2 rounded-lg text-left
                          ${
                            currentLesson === lessonIndex
                              ? "bg-green-pea/10 text-green-pea"
                              : "hover:bg-gray-50"
                          }`}
                        onClick={() => onLessonSelect(lessonIndex)}
                      >
                        {item.type === "video" ? (
                          <PlayCircle className="w-4 h-4" />
                        ) : (
                          <FileText className="w-4 h-4" />
                        )}
                        <div className="flex-1">
                          <span className="block">{item.title}</span>
                          {item.duration && (
                            <span className="text-sm text-gray-600">
                              {item.duration} min
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
