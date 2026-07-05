// import { useState } from "react";
import { Course } from "@/domain/interfaces/course";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CourseTabsProps {
  course: Course;
  currentLesson: number;
}

export default function CourseTabs({ course, currentLesson }: CourseTabsProps) {
  const currentSection = course.sections?.find(section =>
    section.items?.some((_, index) => index === currentLesson)
  );

  const currentItem = currentSection?.items?.[currentLesson];

  return (
    <div className="flex-1 p-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <h2 className="text-2xl font-bold mb-4">{currentItem?.title}</h2>
          <p className="text-gray-600">
            {currentItem?.description || "No description available"}
          </p>
        </TabsContent>

        <TabsContent value="notes" className="mt-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Your notes for this lesson will appear here.</p>
          </div>
        </TabsContent>

        <TabsContent value="announcements" className="mt-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Course announcements will appear here.</p>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Course reviews will appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
