import { useState } from "react";
import { Star, Users, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/models";
import SectionHeading from "../../shared/section-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface InstructorSectionProps {
  course: Course;
}

export default function InstructorSection({ course }: InstructorSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    {
      icon: Star,
      value: "4.6",
      label: "Instructor Rating",
    },
    {
      icon: Users,
      value: "35,930",
      label: "Reviews",
    },
    {
      icon: Users,
      value: "216,738",
      label: "Students",
    },
    {
      icon: PlayCircle,
      value: "3",
      label: "Courses",
    },
  ];

  const description = `Visualpath is a leading software training organization with 12+ years of experience providing training on cutting edge technologies. 32K+ Learners worldwide.

We provide Career Building video courses on various top and trending IT courses like DevOps, Cloud Computing, Full Stack, Python, Data warehousing, Testing and many more.

VisualPath IT is one of the leading software training centers in Hyderabad and most reputable training division in all areas. Visualpath provides high-end technology that will allow everyone to build a career with them. Visualpath is the best institute in online training, corporate training and classroom training. They offer training programs online in India and abroad.`;

  const truncatedDescription = description.split('\n\n')[0];

  return (
    <section className="space-y-6">
      <SectionHeading title="Instructor" />

      <div className="space-y-4">
        {/* Instructor Profile */}
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarFallback className="bg-green-pea/80 text-white">
              {course.instructorId.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <a
              href="#"
              className="text-lg font-semibold text-green-pea hover:text-parsley"
            >
              Imran Teli
            </a>
            <p className="text-sm text-gray-600">A Technology School</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-gray-600" />
                  <span className="font-semibold">{stat.value}</span>
                </div>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <p className="text-sm text-gray-700 whitespace-pre-line">
            {isExpanded ? description : truncatedDescription}
          </p>
          <Button
            variant="link"
            className="text-green-pea hover:text-parsley p-0 h-auto text-sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Show {isExpanded ? "less" : "more"}
          </Button>
        </div>
      </div>
    </section>
  );
} 