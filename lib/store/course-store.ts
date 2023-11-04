import { create } from "zustand";
import { Course } from "../interfaces";

type CourseStore = {
  course?: Course;
  setCourse: (course?: Course) => void;
  currentSection: number;
  currentUnit: number;
  currentStep: number;
  setCurrentSection: (currentSection: number) => void;
  setCurrentUnit: (currentUnit: number) => void;
  setCurrentStep: (currentStep: number) => void;
  dbSection: number;
  dbUnit: number;
  dbStep: number;
  setDbSection: (dbSession: number) => void;
  setDbUnit: (dbUnit: number) => void;
  setDbStep: (dbStep: number) => void;
};

export const useCourseStore = create<CourseStore>((set) => ({
  course: undefined,
  setCourse: (course) => set({ course }),
  currentSection: 0,
  currentUnit: 0,
  currentStep: 0,
  setCurrentSection: (currentSection) => set({ currentSection }),
  setCurrentUnit: (currentUnit) => set({ currentUnit }),
  setCurrentStep: (currentStep) => set({ currentStep }),
  dbSection: 0,
  dbUnit: 0,
  dbStep: 0,
  setDbSection: (dbSection) => set({ dbSection }),
  setDbUnit: (dbUnit) => set({ dbUnit }),
  setDbStep: (dbStep) => set({ dbStep }),
}));
