import { create } from "zustand";
import { Course } from "../interfaces";

type UserCoursesStore = {
  courses: Course[];
  setCourses: (courses: Course[]) => void;
};

export const useUserCoursesStore = create<UserCoursesStore>((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
}));
