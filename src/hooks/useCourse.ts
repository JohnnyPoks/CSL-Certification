import { useState, useEffect } from 'react';
import { Course } from '@/domain/interfaces/course';
import { generateMockCourses } from '@/data/pock-data';

export function useCourse(courseId: string | undefined) {
    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    // console.log("fetching course", courseId);
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                setLoading(true);
                // For now, using mock data
                const mockCourses = generateMockCourses();
                // console.log("mockCourses", mockCourses);
                const foundCourse = mockCourses.find(c => c.id === courseId);
                // console.log("foundCourse", foundCourse);

                if (!foundCourse) {
                    throw new Error('Course not found');
                }

                setCourse(foundCourse);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch course'));
            } finally {
                setLoading(false);
            }
        };

        if (courseId) {
            fetchCourse();
        }
    }, [courseId]);

    return { course, loading, error };
}
