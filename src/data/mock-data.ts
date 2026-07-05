import { Course, CourseLevel, Currency, PublishStatus } from "@/models";
import { Timestamp } from "firebase/firestore";
import { faker } from "@faker-js/faker/locale/fr";

export function generateMockCourses(count: number = 10): Course[] {
  const now = Timestamp.now();

  return Array(count)
    .fill(null)
    .map((_) => {
      const categories = [
        "BTP",
        "Sécurité",
        "Management",
        "Informatique",
        "Droit",
      ];
      const category = faker.helpers.arrayElement(categories);
      const subCategories = faker.lorem.words(3).split(" ");

      return {
        id: faker.database.mongodbObjectId(),
        title: faker.lorem.sentence(5),
        subtitle: faker.lorem.sentence(10),
        description: faker.lorem.paragraph(3),
        shortDescription: faker.lorem.sentence(5),
        language: "Français",
        level: faker.helpers.arrayElement(Object.values(CourseLevel)),
        category: category,
        subCategories: subCategories,
        whatYouWillLearn: faker.lorem.sentences(4).split(". "),
        requirements: faker.lorem.sentences(3).split(". "),
        targetAudience: faker.lorem.words(3).split(" "),
        instructorId: faker.database.mongodbObjectId(),
        instructorName: faker.person.fullName(),
        thumbnailURL: faker.image.url({ width: 200, height: 300 }),
        price: faker.number.int({ min: 50, max: 500 }),
        currency: Currency.EUR,
        discountPrice: faker.number.int({ min: 20, max: 400 }),
        rating: faker.number.float({ min: 3, max: 5, fractionDigits: 1 }),
        totalRatings: faker.number.int({ min: 10, max: 2000 }),
        totalStudents: faker.number.int({ min: 100, max: 10000 }),
        status: PublishStatus.PUBLIE,
        isComplete: faker.datatype.boolean(),
        createdAt: now,
        updatedAt: now,
        publishedAt: now,
        lastUpdated: faker.date.recent().toLocaleDateString("fr-FR", {
          month: "2-digit",
          year: "numeric",
        }),
        estimatedDuration: faker.number.int({ min: 300, max: 1000 }),
        certificateEnabled: faker.datatype.boolean(),
        hasSubtitles: faker.datatype.boolean(),
        sections: Array(faker.number.int({ min: 5, max: 15 }))
          .fill(null)
          .map(() => ({
            id: faker.database.mongodbObjectId(),
            title: faker.lorem.sentence(3),
            lectures: faker.number.int({ min: 3, max: 20 }),
            duration: faker.number.int({ min: 20, max: 200 }),
            items: Array(faker.number.int({ min: 3, max: 10 }))
              .fill(null)
              .map(() => ({
                id: faker.database.mongodbObjectId(),
                type: faker.helpers.arrayElement(["video", "quiz"]),
                title: faker.lorem.sentence(3),
                duration:
                  faker.helpers.arrayElement(["video"]) === "video"
                    ? faker.date.recent().toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : undefined,
                preview: faker.datatype.boolean(),
                questions:
                  faker.helpers.arrayElement(["quiz"]) === "quiz"
                    ? faker.number.int({ min: 1, max: 10 })
                    : undefined,
              })),
          })),
      };
    });
}
