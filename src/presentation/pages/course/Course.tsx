import { generateMockCourses } from "@/data/mock-data";
import CourseHero from "@/presentation/components/course/hero";
import CourseFeaturesSection from "@/presentation/components/course/features";
import { useMemo } from "react";
import type { Course } from "@/models";
import { CourseLevel, Currency, PublishStatus } from "@/models";
import { Timestamp } from "firebase/firestore";
import CourseContent from "@/presentation/components/course/content";
import CourseCart from "@/presentation/components/course/cart";
import InstructorSection from "@/presentation/components/course/instructor";
// import RelatedCourses from "@/presentation/components/course/related";

export default function CoursePage() {
  // const { id } = useParams();

  const course = useMemo(() => {
    const mockCourse = generateMockCourses(1)[0];
    const now = Timestamp.fromDate(new Date());

    return {
      ...mockCourse,
      title: "Sécurité et Prévention sur les Chantiers de Construction",
      subtitle:
        "Formation complète pour les professionnels du BTP | Normes, Équipements, Procédures, Gestion des Risques",
      description:
        "Formation approfondie sur la sécurité et la prévention des risques sur les chantiers de construction.",
      shortDescription:
        "Maîtrisez les fondamentaux de la sécurité sur chantier",
      language: "Français",
      level: CourseLevel.INTERMEDIAIRE,
      category: "Sécurité",
      subCategories: ["Prévention", "EPI"],
      whatYouWillLearn: [
        "Comprendre les fondamentaux de la sécurité sur chantier",
        "Maîtriser les techniques de prévention des risques",
        "Appliquer les normes de sécurité en vigueur",
        "Utiliser correctement les équipements de protection",
      ],
      requirements: [
        "Aucune expérience préalable requise",
        "Bases en construction recommandées",
        "Maîtrise du français",
      ],
      targetAudience: [
        "Professionnels du BTP",
        "Chefs de chantier",
        "Responsables sécurité",
      ],
      instructorId: "user-123",
      instructorName: "Marie Dubois",
      thumbnailURL: "https://picsum.photos/200/300?random=1",
      price: 299,
      currency: Currency.EUR,
      discountPrice: 149,
      rating: 4.8,
      totalRatings: 1423,
      totalStudents: 12676,
      status: PublishStatus.PUBLIE,
      isComplete: true,
      createdAt: now,
      updatedAt: now,
      publishedAt: now,
      lastUpdated: "02/2024",
      estimatedDuration: 750,
      certificateEnabled: true,
      hasSubtitles: true,
      sections: [
        {
          id: "section-1",
          title: "Introduction",
          lectures: 7,
          duration: 34,
          items: [
            {
              id: "item-1-1",
              title: "À propos de ce cours",
              duration: "02:11",
              preview: true,
              type: "video",
            },
            {
              id: "item-1-2",
              title: "Introduction à la sécurité",
              duration: "07:59",
              type: "video",
            },
            {
              id: "item-1-3",
              title: "Qu'est-ce que la prévention?",
              duration: "15:15",
              preview: true,
              type: "video",
            },
            {
              id: "item-1-4",
              title: "Questions fréquentes",
              duration: "01:30",
              type: "video",
            },
            {
              id: "item-1-5",
              title: "Les bases de la sécurité",
              duration: "07:30",
              preview: true,
              type: "video",
            },
            {
              id: "item-1-6",
              title: "Évaluation des risques",
              duration: "05:11",
              preview: true,
              type: "video",
            },
            {
              id: "item-1-7",
              title: "Quiz sur la sécurité",
              type: "quiz",
              questions: 3,
            },
          ],
        },
        {
          id: "section-2",
          title: "Équipements de Protection",
          lectures: 8,
          duration: 57,
          items: [
            {
              id: "item-1-1",
              title: "À propos de ce cours",
              duration: "02:11",
              preview: true,
              type: "video",
            },
            {
              id: "item-1-2",
              title: "Introduction à la s��curité",
              duration: "07:59",
              type: "video",
            },
            {
              id: "item-1-3",
              title: "Qu'est-ce que la prévention?",
              duration: "15:15",
              preview: true,
              type: "video",
            },
            {
              id: "item-1-4",
              title: "Questions fréquentes",
              duration: "01:30",
              type: "video",
            },
            {
              id: "item-1-5",
              title: "Les bases de la sécurité",
              duration: "07:30",
              preview: true,
              type: "video",
            },
            {
              id: "item-1-6",
              title: "Évaluation des risques",
              duration: "05:11",
              preview: true,
              type: "video",
            },
            {
              id: "item-1-7",
              title: "Quiz sur la sécurité",
              type: "quiz",
              questions: 3,
            },
          ],
        },
        {
          id: "section-3",
          title: "Travail en Hauteur",
          lectures: 7,
          duration: 85,
        },
        {
          id: "section-4",
          title: "Gestion des Risques",
          lectures: 17,
          duration: 190,
        },
        {
          id: "section-5",
          title: "Procédures d'Urgence",
          lectures: 10,
          duration: 109,
        },
      ],
    } as Course;
  }, []);

  // Generate some mock related courses
  // const relatedCourses = generateMockCourses(8);

  return (
    <div className="min-h-screen bg-white">
      <CourseHero course={course} />

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
          <div className="space-y-8">
            <CourseFeaturesSection course={course} />
            <CourseContent course={course} />
            <InstructorSection course={course} />
            {/* <RelatedCourses courses={relatedCourses} /> */}
          </div>
          <CourseCart course={course} />
        </div>
      </div>
    </div>
  );
}
