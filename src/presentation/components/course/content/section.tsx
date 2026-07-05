import { ChevronDown } from "lucide-react";
import { CourseSection } from "@/models";
import SectionItem from "./section-item";

interface CourseSectionProps {
  section: CourseSection;
}

export default function Section({ section }: CourseSectionProps) {
  return (
    <div className="p-4">
      <button className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChevronDown className="w-5 h-5" />
          <span className="font-bold">{section.title}</span>
        </div>
        <div className="text-sm text-gray-600">
          {section.lectures} leçons • {section.duration}
        </div>
      </button>
      {!section.collapsed && section.items && (
        <div className="mt-2 ml-7 space-y-2">
          {section.items.map((item, index) => (
            <SectionItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
