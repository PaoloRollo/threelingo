"use client";
import SelectCoursePage from "@/components/pages/select-course-page";
import NoWalletComponent from "@/components/shared/no-wallet-component";
import { useWeb3Auth } from "@/hooks/use-web3-auth";
import { useUserCoursesStore } from "@/lib/store";
import { useUserStore } from "@/lib/store/user-store";
import { Skeleton } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function LearnPage() {
  // const { address } = useAccount();
  const { web3Auth, loading, signIn } = useWeb3Auth(true);
  const address = useUserStore((state) => state.address);
  console.log(address);
  const courses = useUserCoursesStore((state) => state.courses);

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

  if (courses.length === 0) {
    return <SelectCoursePage />;
  }

  return <main className=""></main>;
}
