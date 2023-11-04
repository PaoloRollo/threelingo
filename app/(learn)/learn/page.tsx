"use client";
import SelectCoursePage from "@/components/pages/select-course-page";
import NoWalletComponent from "@/components/shared/no-wallet-component";
import { useUserCoursesStore } from "@/lib/store";
import { useAccount } from "wagmi";

export default function LearnPage() {
  const { address } = useAccount();
  const courses = useUserCoursesStore((state) => state.courses);

  if (!address) {
    return <NoWalletComponent />;
  }

  if (courses.length === 0) {
    return <SelectCoursePage />;
  }

  return <main className=""></main>;
}
