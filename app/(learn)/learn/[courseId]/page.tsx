"use client";
import { availableCourses } from "@/lib/courses";
import { useCourseStore } from "@/lib/store";
import { useGuidebookModalStore } from "@/lib/store/guidebook-modal-store";
import { cn } from "@nextui-org/react";
import {
  BookIcon,
  CheckIcon,
  FastForwardIcon,
  FileQuestion,
  LockIcon,
  StarIcon,
  TerminalIcon,
  TrophyIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const units = [
  {
    description: "Learn about Safe",
    background: "bg-emerald-500",
    darkBorder: "border-emerald-800",
    steps: [
      {
        type: "q&a",
      },
      {
        type: "q&a",
      },
      {
        type: "action",
      },
      {
        type: "q&a",
      },
      {
        type: "reward",
      },
      {
        type: "q&a",
      },
      {
        type: "trophy",
      },
    ],
  },
  {
    description: "Learn about Safe 2",
    background: "bg-red-500",
    darkBorder: "border-red-800",
    steps: [
      {
        type: "q&a",
      },
      {
        type: "q&a",
      },
      {
        type: "action",
      },
      {
        type: "q&a",
      },
      {
        type: "reward",
      },
      {
        type: "q&a",
      },
      {
        type: "trophy",
      },
    ],
  },
  {
    description: "Learn about Safe 3",
    background: "bg-amber-500",
    darkBorder: "border-amber-800",
    steps: [
      {
        type: "q&a",
      },
      {
        type: "q&a",
      },
      {
        type: "action",
      },
      {
        type: "q&a",
      },
      {
        type: "reward",
      },
      {
        type: "q&a",
      },
      {
        type: "trophy",
      },
    ],
  },
];

export default function Page({ params }: { params: { courseId: string } }) {
  const course = availableCourses.find(
    (course) => course.id === params.courseId
  );
  const router = useRouter();
  const setGuidebookTarget = useGuidebookModalStore((state) => state.setTarget);
  const toggleGuidebook = useGuidebookModalStore(
    (state) => state.toggleGuidebookModal
  );
  const setCourse = useCourseStore((state) => state.setCourse);
  const [currentUnit, setCurrentUnit] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  useEffect(() => {
    if (course) {
      setCourse(course);
    }
  }, [course]);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <section id="learn-course-page" className="pt-32 pb-24">
      {units.map((unit, index) => {
        return (
          <div className="flex flex-col" key={`unit-${index}`}>
            <div
              className={cn(
                "py-6 px-4 text-white flex items-center justify-between",
                unit.background
              )}
            >
              <div className="flex flex-col">
                <h3 className="font-bold text-2xl">Unit {index + 1}</h3>
                <p>{unit.description}</p>
              </div>
              <BookIcon
                size={32}
                onClick={() => {
                  setGuidebookTarget({ ...course, units, currentUnit: index });
                  toggleGuidebook();
                }}
              />
            </div>
            <div className="flex flex-col items-center py-8">
              {unit.steps.map((step, stepIndex) => {
                const isActive =
                  currentUnit >= index && stepIndex <= currentStep;
                const isCompleted = completedSteps.includes(
                  `${index}-${stepIndex}`
                );
                const isSkipTo = currentUnit < index && stepIndex === 0;
                const bgClassname =
                  isCompleted || isSkipTo || isActive
                    ? `${unit.background} text-white`
                    : "bg-gray-400 text-gray-200";
                return (
                  <div
                    key={`step-${index}-${stepIndex}`}
                    onClick={() => {
                      setCompletedSteps([
                        ...completedSteps,
                        `${index}-${stepIndex}`,
                      ]);
                      if (stepIndex === unit.steps.length - 1) {
                        setCurrentUnit(currentUnit + 1);
                        setCurrentStep(0);
                      } else {
                        setCurrentStep(currentStep + 1);
                      }
                    }}
                    className={cn(
                      "rounded-full h-16 w-16 my-4 border-b-4 flex items-center justify-center border-black",
                      bgClassname,
                      stepIndex === 1 && "-translate-x-8",
                      stepIndex === 2 && "-translate-x-12",
                      stepIndex === 3 && "-translate-x-10",
                      stepIndex === 5 && "translate-x-8"
                    )}
                  >
                    {isCompleted ? (
                      <CheckIcon size={32} />
                    ) : isSkipTo ? (
                      <FastForwardIcon size={32} />
                    ) : !isActive ? (
                      <LockIcon size={32} />
                    ) : step.type === "q&a" ? (
                      <FileQuestion size={32} />
                    ) : step.type === "reward" ? (
                      <StarIcon size={32} />
                    ) : step.type === "trophy" ? (
                      <TrophyIcon size={32} />
                    ) : (
                      <TerminalIcon size={32} />
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
