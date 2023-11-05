"use client";
import SelectCoursePage from "@/components/pages/select-course-page";
import NoWalletComponent from "@/components/shared/no-wallet-component";
import { useUserCoursesStore } from "@/lib/store";
import { useUserStore } from "@/lib/store/user-store";
import { Skeleton } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LearnPage() {
  // const { address } = useAccount();
  const [loading, setLoading] = useState(true);
  const address = useUserStore((state) => state.address);

  const courses = useUserCoursesStore((state) => state.courses);
  const setCourses = useUserCoursesStore((state) => state.setCourses);

  useEffect(() => {
    if (address) {
      fetchCourses();
    }
  }, [address]);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/courses`);
      const data = await res.json();
      setCourses(data.result);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section
        id="select-course-page"
        className="py-24 px-8 max-w-3xl mx-auto flex flex-col space-y-8"
      >
        <h1 className="font-bold text-2xl tracking-wide">Web3 Courses</h1>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <Skeleton className="rounded-xl h-36 aspect-square" />
          <Skeleton className="rounded-xl h-36 aspect-square" />
          <Skeleton className="rounded-xl h-36 aspect-square" />
        </motion.div>
      </section>
    );
  }

  if (!address) {
    return <NoWalletComponent />;
  }

  return <SelectCoursePage />;
}
