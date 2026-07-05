import { Course } from "@/models";
import {
  PlayCircle,
  FileText,
  Download,
  Smartphone,
  Trophy,
} from "lucide-react";
import SectionHeading from "../shared/section-heading";
import FeatureItem from "../shared/feature-item";
import TopicBadge from "../shared/topic-badge";

interface CourseFeaturesSectionProps {
  course: Course;
}

export default function CourseFeaturesSection({
  course: _x,
}: CourseFeaturesSectionProps) {
  const relatedTopics = [
    { id: "btp", label: "BTP" },
    { id: "securite", label: "Sécurité & Prévention" },
    { id: "construction", label: "Construction" },
  ];

  const courseFeatures = [
    { icon: PlayCircle, text: "12.5 heures de vidéo à la demande" },
    { icon: FileText, text: "25 articles et documents" },
    { icon: Download, text: "94 ressources téléchargeables" },
    { icon: Smartphone, text: "Accès sur mobile et TV" },
    { icon: Trophy, text: "Certificat de réussite" },
  ];

  return (
    <div className="space-y-8">
      {/* Related Topics */}
      <section>
        <SectionHeading title="Explorez les sujets connexes" className="mb-4" />
        <div className="flex flex-wrap gap-2">
          {relatedTopics.map((topic) => (
            <TopicBadge
              key={topic.id}
              label={topic.label}
              onClick={() => console.log(`Navigating to ${topic.id}`)}
            />
          ))}
        </div>
      </section>

      {/* Course Includes */}
      <section>
        <SectionHeading title="Cette formation inclut :" className="mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseFeatures.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>
      </section>
    </div>
  );
}
