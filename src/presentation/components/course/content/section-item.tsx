import { PlayCircle, FileText } from "lucide-react";
import { CourseSectionItem } from "@/models";
import { Button } from "@/components/ui/button";

interface SectionItemProps {
  item: CourseSectionItem;
}

export default function SectionItem({ item }: SectionItemProps) {
  const getIcon = () => {
    switch (item.type) {
      case "video":
        return <PlayCircle className="w-4 h-4 text-gray-500" />;
      case "article":
        return <FileText className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center gap-2">
        {getIcon()}
        <span className={item.preview ? "text-green-pea" : ""}>
          {item.title}
        </span>
      </div>
      <div className="flex items-center gap-4">
        {item.preview && (
          <Button
            variant="link"
            className="text-green-pea hover:text-parsley p-0 h-auto"
          >
            Preview
          </Button>
        )}
        <span className="text-sm text-gray-600 min-w-[50px] text-right">
          {item.duration}
        </span>
      </div>
    </div>
  );
}
