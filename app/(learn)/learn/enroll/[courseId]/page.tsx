"use client";
import { useCourseStore } from "@/lib/store";
import { useUserStore } from "@/lib/store/user-store";
import { Button, CircularProgress, Divider, Image } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { courseId: string } }) {
  const [loading, setLoading] = useState<boolean>(false);
  const address = useUserStore((state) => state.address);
  const course = useCourseStore((state) => state.course);
  const router = useRouter();
  const setCourse = useCourseStore((state) => state.setCourse);
  const currentSection = useCourseStore((state) => state.currentSection);
  const currentUnit = useCourseStore((state) => state.currentUnit);
  const currentStep = useCourseStore((state) => state.currentStep);
  const setCurrentSection = useCourseStore((state) => state.setCurrentSection);
  const setCurrentUnit = useCourseStore((state) => state.setCurrentUnit);
  const setCurrentStep = useCourseStore((state) => state.setCurrentStep);

  useEffect(() => {
    console.log(course, address);
    if (!course && address) {
      fetchCourse();
    }
  }, [course, address]);

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const [courseRes, progressRes] = await Promise.all([
        fetch(`/api/courses/${params.courseId}`),
        fetch(`/api/courses/${params.courseId}/${address}/progress`),
      ]);
      const courseData = await courseRes.json();
      const progressData = await progressRes.json();
      setCourse(courseData.result);
      const { result } = progressData;
      setCurrentSection(result.current_section);
      setCurrentUnit(result.current_unit);
      setCurrentStep(result.current_step);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!course) {
    return (
      <section
        id="course-page"
        className="h-screen w-screen flex flex-col items-center justify-center"
      >
        <CircularProgress />
      </section>
    );
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
      {currentSection === 0 && currentUnit === 0 && currentStep === 0 && (
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
      )}
      {currentSection !== 0 ||
        currentUnit !== 0 ||
        (currentStep !== 0 && (
          <Button
            variant="solid"
            color="success"
            className="font-bold uppercase tracking-widest border-b-primary-800 border-b-4"
            onClick={() => {
              setCourse(course);
              router.push(`/learn/${course.id}`);
            }}
          >
            Already enrolled
          </Button>
        ))}
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
