"use client";
import { useCourseStore, useStepModalStore } from "@/lib/store";
import { useGuidebookModalStore } from "@/lib/store/guidebook-modal-store";
import { useUserStore } from "@/lib/store/user-store";
import { CircularProgress, cn } from "@nextui-org/react";
import {
  BookIcon,
  CheckIcon,
  FastForwardIcon,
  FileQuestion,
  LockIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { courseId: string } }) {
  const [loading, setLoading] = useState<boolean>(false);
  const address = useUserStore((state) => state.address);
  const course = useCourseStore((state) => state.course);
  const currentSection = useCourseStore((state) => state.currentSection);
  const currentUnit = useCourseStore((state) => state.currentUnit);
  const currentStep = useCourseStore((state) => state.currentStep);
  const setCurrentStep = useCourseStore((state) => state.setCurrentStep);
  const setCurrentUnit = useCourseStore((state) => state.setCurrentUnit);
  const setCurrentSection = useCourseStore((state) => state.setCurrentSection);
  const router = useRouter();
  const setGuidebookTarget = useGuidebookModalStore((state) => state.setTarget);
  const toggleGuidebook = useGuidebookModalStore(
    (state) => state.toggleGuidebookModal
  );
  const setCourse = useCourseStore((state) => state.setCourse);
  const step = useStepModalStore((state) => state.step);
  const setStep = useStepModalStore((state) => state.setStep);
  const toggleStepModal = useStepModalStore((state) => state.toggleStepModal);
  // const [completedSteps, setCompletedSteps] = useState<string[]>([]);

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
    <section id="learn-course-page" className="pt-32 pb-24">
      {course.sections[currentSection].units.map((unit, index) => {
        return (
          <div className="flex flex-col" key={`unit-${index}`}>
            <div
              className={cn(
                "py-6 px-4 text-white flex items-center justify-between",
                "bg-emerald-500"
              )}
            >
              <div className="flex flex-col">
                <h3 className="font-bold text-2xl">Unit {index + 1}</h3>
                <p>{unit.name}</p>
              </div>
              <BookIcon
                size={32}
                onClick={() => {
                  setGuidebookTarget({
                    ...course,
                    currentSection,
                    currentUnit: index,
                  });
                  toggleGuidebook();
                }}
              />
            </div>
            <div className="flex flex-col items-center py-8">
              {unit.steps.map((step, stepIndex) => {
                const isActive =
                  currentUnit >= index && stepIndex <= currentStep;
                const isCompleted =
                  currentUnit > index ||
                  (currentUnit === index && stepIndex < currentStep);
                const isSkipTo = currentUnit < index && stepIndex === 0;
                const bgClassname =
                  isCompleted || isSkipTo || isActive
                    ? `bg-emerald-500 text-white`
                    : "bg-gray-400 text-gray-200";
                return (
                  <div
                    key={`step-${index}-${stepIndex}`}
                    className={cn(
                      "rounded-full h-16 w-16 my-4 border-b-4 flex items-center justify-center border-black",
                      bgClassname,
                      stepIndex === 1 && "-translate-x-8",
                      stepIndex === 2 && "-translate-x-12",
                      stepIndex === 3 && "-translate-x-10",
                      stepIndex === 5 && "translate-x-8"
                    )}
                    onClick={() => {
                      if (isActive && !isCompleted) {
                        setStep(step);
                        toggleStepModal();
                      }
                    }}
                  >
                    {isCompleted ? (
                      <CheckIcon size={32} />
                    ) : isSkipTo ? (
                      <FastForwardIcon size={32} />
                    ) : !isActive ? (
                      <LockIcon size={32} />
                    ) : (
                      <FileQuestion size={32} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
