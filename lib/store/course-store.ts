import { create } from "zustand";
import { Course } from "../interfaces";

type CourseStore = {
  course?: Course;
  setCourse: (course?: Course) => void;
  currentSection: number;
  currentUnit: number;
  setCurrentSection: (currentSection: number) => void;
  setCurrentUnit: (currentUnit: number) => void;
};

export const useCourseStore = create<CourseStore>((set) => ({
  course: undefined,
  setCourse: (course) => set({ course }),
  currentSection: 0,
  currentUnit: 0,
  setCurrentSection: (currentSection) => set({ currentSection }),
  setCurrentUnit: (currentUnit) => set({ currentUnit }),
}));
