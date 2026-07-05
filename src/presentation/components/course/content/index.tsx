import { useState } from "react";
import { Course } from "@/models";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionItem from "./section-item";
import { formatDuration, intervalToDuration } from "date-fns";

interface CourseContentProps {
  course: Course;
}

export default function CourseContent({ course }: CourseContentProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [showAllSections, setShowAllSections] = useState(false);

  const totalLectures =
    course.sections?.reduce((acc, section) => acc + section.lectures, 0) || 0;
  const displayedSections = showAllSections
    ? course.sections
    : course.sections?.slice(0, 10);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleAllSections = () => {
    if (expandedSections.length === course.sections?.length) {
      setExpandedSections([]);
    } else {
      setExpandedSections(course.sections?.map((s) => s.id) || []);
    }
  };

  const formatCourseDuration = (minutes: number): string => {
    const duration = intervalToDuration({ start: 0, end: minutes * 60 * 1000 });
    return formatDuration(duration, {
      format: ["hours", "minutes"],
    }).replace(/,\s*/, " ");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">Contenu du cours</h2>
          <p className="text-sm text-gray-600">
            {course.sections?.length} sections • {totalLectures} cours •{" "}
            {formatCourseDuration(course.estimatedDuration)} durée totale
          </p>
        </div>
        <Button
          variant="link"
          className="text-green-pea hover:text-parsley"
          onClick={toggleAllSections}
        >
          {expandedSections.length === course.sections?.length
            ? "Réduire toutes les sections"
            : "Développer toutes les sections"}
        </Button>
      </div>

      <div className="border border-gray-200 rounded-lg divide-y">
        {displayedSections?.map((section) => (
          <div key={section.id} className="bg-white">
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center gap-2">
                {expandedSections.includes(section.id) ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
                <span className="font-medium">{section.title}</span>
              </div>
              <div className="text-sm text-gray-600">
                {section.lectures} cours •{" "}
                {formatCourseDuration(section.duration)}
              </div>
            </button>

            {expandedSections.includes(section.id) && (
              <div className="px-11 pb-4 space-y-2">
                {section.items?.map((item, index) => (
                  <SectionItem key={index} item={item} />
                )) || <p className="text-gray-500">Aucun contenu disponible</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {!showAllSections && course.sections && course.sections.length > 10 && (
        <Button
          variant="outline"
          className="w-full py-3"
          onClick={() => setShowAllSections(true)}
        >
          {course.sections.length - 10} sections supplémentaires
        </Button>
      )}
    </div>
  );
}
