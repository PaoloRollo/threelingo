import { create } from "zustand";
import { Course } from "../interfaces";

type CourseStore = {
  course?: Course;
  setCourse: (course?: Course) => void;
};

export const useCourseStore = create<CourseStore>((set) => ({
  course: undefined,
  setCourse: (course) => set({ course }),
}));
