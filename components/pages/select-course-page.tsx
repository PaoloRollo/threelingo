import { useUserCoursesStore } from "@/lib/store";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SelectCoursePage() {
  const router = useRouter();
  const courses = useUserCoursesStore((state) => state.courses);
  console.log(courses);
  return (
    <section
      id="select-course-page"
      className="py-24 px-8 max-w-3xl mx-auto flex flex-col space-y-8"
    >
      <h1 className="font-bold text-2xl tracking-wide">Web3 Courses</h1>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            onClick={() => router.push(`/learn/enroll/${course.id}`)}
            className="rounded-xl border-x-2 border-t-2 border-b-4 border-gray-300 aspect-square flex flex-col items-center justify-center space-y-2 hover:bg-gray-200 cursor-pointer"
          >
            <Image src={course.image} className="h-20" alt={course.name} />
            <p className="opacity-60 font-semibold tracking-wide text-sm text-center">
              {course.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
