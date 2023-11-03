"use client";

import { availableCourses } from "@/lib/courses";
import { useCourseStore } from "@/lib/store";
import { Button, Divider, Image } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { courseId: string } }) {
  const course = availableCourses.find(
    (course) => course.id === params.courseId
  );
  const router = useRouter();
  const setCourse = useCourseStore((state) => state.setCourse);

  if (!course) {
    return <div>Course not found</div>;
  }
  return (
    <section
      id="course-page"
      className="py-24 px-8 max-w-3xl mx-auto flex flex-col space-y-5"
    >
      <h2
        className="uppercase flex items-center space-x-2 opacity-50 font-semibold tracking-widest cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft />
        <span>All courses</span>
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4 items-center">
          <Image src={course.image} className="h-20" alt={course.name} />
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl tracking-wide">{course.name}</h1>
          </div>
        </div>
      </div>
      <Button
        variant="solid"
        color="primary"
        className="font-bold uppercase tracking-widest border-b-primary-800 border-b-4"
        onClick={() => {
          setCourse(course);
          router.push(`/learn/${course.id}`);
        }}
      >
        Enroll now!
      </Button>
      <Divider />
      <h1 className="font-bold text-xl tracking-wide">About the course</h1>
      <p>{course.description}</p>
      {/* <motion.div
        transition={{ staggerChildren: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {availableCourses.map((course, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ once: true, delay: index * 0.2 }}
            key={course.id}
            //onClick={() => router.push(`/learn/enroll/${course.id}`)}
            className="rounded-xl border-x-2 border-t-2 border-b-4 border-gray-300 dark:border-default aspect-square flex flex-col items-center justify-center space-y-2 hover:bg-gray-200 dark:hover:bg-content1 cursor-pointer"
          >
            <Image src={course.image} className="h-20" alt={course.name} />
            <p className="opacity-60 font-semibold tracking-wide">
              {course.name}
            </p>
          </motion.div>
        ))}
      </motion.div> */}
    </section>
  );
}
