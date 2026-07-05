import { Course } from "@/domain/interfaces/course";

export function generateMockCourses(): Course[] {
    return [
      {
        id: "course-1",
        title: "Formation en Sécurité et Prévention",
        description: "Formation complète sur la sécurité au travail",
        sections: [
          {
            id: "section-1",
            title: "Introduction à la Sécurité",
            lectures: 5,
            duration: 45,
            items: [
              {
                id: "lesson-1",
                title: "Principes Fondamentaux",
                type: "video",
                duration: 10,
                description: "Introduction aux principes de base de la sécurité",
                videoUrl: "https://www.youtube.com/watch?v=suMex4R91Gw"
              },
              {
                id: "lesson-2",
                title: "Principes Fondamentaux",
                type: "video",
                duration: 10,
                description: "Introduction aux principes de base de la sécurité",
                videoUrl: "https://www.youtube.com/watch?v=suMex4R91Gw"
              },
              {
                id: "lesson-3",
                title: "Principes Fondamentaux",
                type: "video",
                duration: 10,
                description: "Introduction aux principes de base de la sécurité",
                videoUrl: "https://www.youtube.com/watch?v=suMex4R91Gw"
              }
            ]
          }
        ],
        totalLectures: 13,
        lessons: [
          {
            videoUrl: "https://www.youtube.com/watch?v=suMex4R91Gw",
            title: "Principes Fondamentaux",
            description: "Introduction aux principes de base de la sécurité",
            duration: 10
          },
          {
            videoUrl: "https://www.youtube.com/watch?v=suMex4R91Gw",
            title: "Principes Fondamentaux",
            description: "Introduction aux principes de base de la sécurité",
            duration: 10
          },
          {
            videoUrl: "https://www.youtube.com/watch?v=suMex4R91Gw",
            title: "Principes Fondamentaux",
            description: "Introduction aux principes de base de la sécurité",
            duration: 10
          },
          {
            videoUrl: "https://www.youtube.com/watch?v=suMex4R91Gw",
            title: "Principes Fondamentaux",
            description: "Introduction aux principes de base de la sécurité",
            duration: 10
          }
        ]
      }
    ];
  }