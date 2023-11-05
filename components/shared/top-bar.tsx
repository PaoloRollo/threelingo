"use client";
import { useWeb3Auth } from "@/hooks/use-web3-auth";
import { useCourseStore, useUserCoursesStore } from "@/lib/store";
import { useUserStore } from "@/lib/store/user-store";
import { sliceAddress } from "@/lib/utils";
import { Button, cn } from "@nextui-org/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  GraduationCapIcon,
  LockIcon,
  UnlockIcon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TopBar() {
  const course = useCourseStore((state) => state.course);
  const setCourse = useCourseStore((state) => state.setCourse);
  const courses = useUserCoursesStore((state) => state.courses);
  const setCourses = useUserCoursesStore((state) => state.setCourses);
  const dbSection = useCourseStore((state) => state.dbSection);
  const currentSection = useCourseStore((state) => state.currentSection);
  const setCurrentSection = useCourseStore((state) => state.setCurrentSection);

  const address = useUserStore((state) => state.address);
  const pathname = usePathname();
  const router = useRouter();
  const { web3Auth, signIn } = useWeb3Auth();
  const [viewSections, setViewSections] = useState<boolean>(false);

  // useEffect(() => {
  //   if (!address) {
  //     setCourse(undefined);
  //     router.push("/learn");
  //   } else if (address) {
  //     router.push("/learn");
  //   }
  // }, [address,]);

  useEffect(() => {
    if (!courses || courses.length === 0) {
      fetchCourses();
    }
  }, [courses]);

  const fetchCourses = async () => {
    try {
      const res = await fetch(`/api/courses`);
      const data = await res.json();
      setCourses(data.result);
    } catch (error) {}
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full bg-background border-b-2 border-default flex flex-col space-y-4 px-4 py-2 z-50 transition-height",
        course && "h-auto",
        !course && "h-16"
      )}
    >
      <div className="flex flex-row items-center justify-between">
        {!address ? (
          <div />
        ) : !course ? (
          <Button
            color="primary"
            variant="ghost"
            onClick={() => router.push("/learn")}
          >
            <GraduationCapIcon />
            <span className="font-bold tracking-widest">Choose</span>
          </Button>
        ) : (
          <Button
            color="primary"
            onClick={() => {
              if (
                pathname === "/learn" ||
                pathname === "/learn/leaderboard" ||
                pathname.includes("/learn/profile")
              ) {
                router.push(`/learn/${course.id}`);
              } else {
                setCourse(undefined);
                router.push("/learn");
              }
            }}
          >
            <GraduationCapIcon />
            <span className="font-bold tracking-widest truncate max-w-[72px]">
              {course.name}
            </span>
          </Button>
        )}
        {address ? (
          <Button
            color="primary"
            className="font-bold uppercase tracking-widest"
            // onClick={() => open({ view: "Account" })}
          >
            <span>{sliceAddress(address)}</span>
          </Button>
        ) : (
          <Button
            color="primary"
            className="font-bold uppercase tracking-widest"
            onClick={() => signIn()}
            isLoading={!web3Auth}
          >
            <span>Connect wallet</span>
          </Button>
        )}
      </div>
      {course &&
        pathname !== "/learn" &&
        pathname !== "/learn/leaderboard" &&
        !pathname.includes("/learn/profile") &&
        !pathname.includes("enroll") && (
          <>
            <div className="flex items-center justify-center relative py-4">
              {!viewSections && (
                <ChevronUpIcon
                  className="absolute top-4 left-2"
                  onClick={() => setViewSections(true)}
                />
              )}
              {viewSections && (
                <ChevronDownIcon
                  className="absolute top-4 left-2"
                  onClick={() => setViewSections(false)}
                />
              )}
              <p className="text-center font-bold tracking-widest truncate w-64 md:w-auto ">
                {course.sections[currentSection].name}
              </p>
            </div>
            {viewSections && (
              <div className="flex flex-col space-y-2">
                {viewSections &&
                  course.sections.map((section, index) => {
                    const isCurrent = index === currentSection;
                    const isLocked = index > dbSection;

                    if (isCurrent) {
                      return (
                        <div
                          key={section.name}
                          onClick={() => {
                            setViewSections(false);
                            setCurrentSection(index);
                          }}
                          className="border-2 border-b-3 bg-emerald-500 border-emerald-700 text-white rounded-xl p-4 w-full h-20 flex space-x-2 items-center justify-between"
                        >
                          <h2 className="font-bold tracking-widest">
                            {section.name}
                          </h2>
                        </div>
                      );
                    }

                    if (isLocked) {
                      return (
                        <div
                          key={section.name}
                          className="border-2 border-b-3 bg-gray-400 border-gray-600 text-white rounded-xl p-4 w-full h-20 flex space-x-2 items-center justify-between"
                        >
                          <h2 className="font-bold tracking-widest">
                            {section.name}
                          </h2>
                          <LockIcon />
                        </div>
                      );
                    }

                    return (
                      <div
                        key={section.name}
                        onClick={() => {
                          setViewSections(false);
                          setCurrentSection(index);
                        }}
                        className="border-2 border-b-3 border-gray-300 rounded-xl p-4 w-full h-20 flex space-x-2 items-center justify-between"
                      >
                        <h2 className="font-bold tracking-widest">
                          {section.name}
                        </h2>
                        <UnlockIcon />
                      </div>
                    );
                  })}
              </div>
            )}
          </>
        )}
    </div>
  );
}
