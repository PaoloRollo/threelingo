"use client";

import SelectCoursePage from "@/components/pages/select-course-page";
import { useUserCoursesStore } from "@/lib/store";

export default function LearnPage() {
  const courses = useUserCoursesStore((state) => state.courses);

  if (courses.length === 0) {
    return <SelectCoursePage />;
  }

  return <main className=""></main>;
}
