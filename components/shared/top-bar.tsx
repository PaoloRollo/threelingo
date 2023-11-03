"use client";
import { useCourseStore } from "@/lib/store";
import { sliceAddress } from "@/lib/utils";
import { Button, cn } from "@nextui-org/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { ChevronUpIcon, GraduationCapIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function TopBar() {
  const course = useCourseStore((state) => state.course);
  const setCourse = useCourseStore((state) => state.setCourse);
  const { address, isConnected } = useAccount();
  const pathname = usePathname();
  const router = useRouter();
  const { open } = useWeb3Modal();
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full bg-background border-b-2 border-default flex flex-col space-y-4 px-4 py-2 z-50",
        course && "h-auto",
        !course && "h-16"
      )}
    >
      <div className="flex flex-row items-center justify-between">
        {!course ? (
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
            <span className="font-bold tracking-widest">{course.name}</span>
          </Button>
        )}
        {address && isConnected ? (
          <Button
            color="primary"
            className="font-bold uppercase tracking-widest"
            onClick={() => open({ view: "Account" })}
          >
            <span>{sliceAddress(address)}</span>
          </Button>
        ) : (
          <Button
            color="primary"
            className="font-bold uppercase tracking-widest"
            onClick={() => open()}
          >
            <span>Connect wallet</span>
          </Button>
        )}
      </div>
      {course &&
        pathname !== "/learn" &&
        pathname !== "/learn/leaderboard" &&
        !pathname.includes("/learn/profile") && (
          <div className="flex items-center justify-center relative py-4">
            <ChevronUpIcon className="absolute top-4 left-2"></ChevronUpIcon>
            <p className="text-center font-bold tracking-widest">
              Section 1: Rookie
            </p>
          </div>
        )}
    </div>
  );
}
