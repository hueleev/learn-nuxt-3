import coursesData from '~/coursesData';
import type { CourseWithPath } from '~/lecture/types/course';

interface CoursesReturn {
  courses: CourseWithPath[];
}

export const useCourses = (): CoursesReturn => {
  const courses: CourseWithPath[] = coursesData.map((item) => ({
    ...item,
    rating: item.rating.toFixed(1), // 5 -> 5.0
    reviewsCount: item.reviewsCount.toLocaleString(), // 1000 -> 1,000
    studentCount: item.studentCount.toLocaleString(), // 12345 -> 12,345
    path: `/course/${item.courseSlug}`,
  }));
  return {
    courses,
  };
};

interface CourseReturn {
  course: Maybe<CourseWithPath>;
  prevCourse: Maybe<CourseWithPath>;
  nextCourse: Maybe<CourseWithPath>;
}

export const useCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  // const course = courses.find((course) => course.courseSlug === courseSlug);
  const index = courses.findIndex((course) => course.courseSlug === courseSlug);
  const course = courses[index];
  const prevCourse = index <= 0 ? null : courses[index - 1];
  const nextCourse = index >= courses.length - 1 ? null : courses[index + 1];
  return { course, prevCourse, nextCourse };
};
