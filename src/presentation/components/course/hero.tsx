import { Course } from "@/models";
import { StarIcon, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CourseHeroProps {
  course: Course;
}

export default function CourseHero({ course }: CourseHeroProps) {
  return (
    <div className="relative w-full bg-black text-white">
      <div className="max-w-screen-xl mx-auto p-8">
        {/* Breadcrumb */}
        <nav className="flex gap-2 text-sm mb-4">
          <Link to="#" className="hover:text-gray-300">
            BTP
          </Link>
          <span>{">"}</span>
          <Link to="#" className="hover:text-gray-300">
            Sécurité
          </Link>
          <span>{">"}</span>
          <Link to="#" className="hover:text-gray-300">
            Prévention
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          <div className="flex flex-col gap-4">
            {/* Title Section */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{course.title}</h1>
              <p className="text-xl">{course.subtitle}</p>
            </div>

            {/* Rating and Stats */}
            <div className="flex items-center gap-2 text-sm flex-wrap">
              <Badge
                variant="secondary"
                className="bg-chelsea-gem text-black border-none"
              >
                Meilleure vente
              </Badge>
              <div className="flex items-center gap-1">
                <span className="text-chelsea-gem">
                  {course.rating?.toFixed(1)}
                </span>
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating ?? 0)
                            ? "text-chelsea-gem"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                </div>
                <a
                  href="#reviews"
                  className="text-blue-400 hover:text-blue-300"
                >
                  ({course.totalRatings?.toLocaleString()} avis)
                </a>
              </div>
              <span>{course.totalStudents?.toLocaleString()} étudiants</span>
            </div>

            {/* Instructor Info */}
            <div className="flex items-center gap-2 text-sm">
              <span>Créé par</span>
              <a
                href="#instructor"
                className="text-blue-400 hover:text-blue-300"
              >
                {course.instructorId}
              </a>
            </div>

            {/* Last Updated */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span>Dernière mise à jour</span>
                <span>{course.lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{course.language}</span>
                {course.hasSubtitles && (
                  <Badge variant="secondary" className="text-xs">
                    ST
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Video Preview */}
          <VideoPreview course={course} />
        </div>
      </div>
    </div>
  );
}
function VideoPreview({ course }: { course: Course }) {
  return (
    <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer group">
      <img
        src={course.thumbnailURL}
        alt={course.title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
      <Button
        variant="secondary"
        className="absolute bottom-4 left-4 font-semibold bg-chelsea-gem text-black hover:bg-chelsea-gem/90"
      >
        Aperçu de la formation
      </Button>
    </div>
  );
}
