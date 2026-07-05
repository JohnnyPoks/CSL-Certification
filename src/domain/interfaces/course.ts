export interface CourseItem {
  id: string;
  title: string;
  type: 'video' | 'article';
  duration: number;
  description?: string;
  videoUrl?: string;
  completed?: boolean;
}

export interface CourseSection {
  id: string;
  title: string;
  lectures: number;
  duration: number;
  items?: CourseItem[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  sections: CourseSection[];
  totalLectures: number;
  lessons: {
    videoUrl: string;
    title: string;
    description: string;
    duration: number;
  }[];
  progress?: number;
  instructor?: {
    name: string;
    avatar: string;
  };
}
