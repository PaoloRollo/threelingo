"use client";
import { availableCourses } from "@/lib/courses";
import { sliceAddress } from "@/lib/utils";
import { Divider, Image } from "@nextui-org/react";
import {
  BookIcon,
  ClockIcon,
  CogIcon,
  FlameIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import { checksumAddress } from "viem";
import { useAccount } from "wagmi";

export default function ProfileContent({
  params,
}: {
  params: { address: string };
}) {
  const { address } = params;
  const { address: loggedAddress } = useAccount();
  // const { data: ensAddress } = useEnsName({ address });

  // console.log(ensAddress);

  return (
    <section
      id="profile-page"
      className="py-24 px-8 max-w-3xl mx-auto flex flex-col"
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl tracking-wide">
            {address && sliceAddress(checksumAddress(address as `0x${string}`))}
          </h1>
        </div>
        {address.toLowerCase() === loggedAddress?.toLowerCase() && (
          <CogIcon size={24} className="text-black/40" />
        )}
      </div>
      <div className="flex space-x-2 mt-4 text-black/40">
        <ClockIcon size={24} />
        <p>Joined 2 days ago</p>
      </div>
      <div className="flex space-x-2 mt-4">
        {availableCourses.map((course) => (
          <Image
            key={course.name}
            src={course.image}
            alt={course.name}
            width={24}
            height={24}
            className="rounded-none"
          />
        ))}
      </div>
      <Divider className="my-8" />
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-b-3 border-gray-300 rounded-xl p-4 w-full h-20 flex space-x-2">
          <FlameIcon className="text-black/30" />
          <div className="flex flex-col">
            <span className="font-bold">0</span>
            <span className="text-black/30 text-xs">Day streak</span>
          </div>
        </div>
        <div className="border-2 border-b-3 border-gray-300 rounded-xl p-4 w-full h-20 flex space-x-2">
          <ZapIcon className={"text-amber-500"} />
          <div className="flex flex-col">
            <span className="font-bold">2450</span>
            <span className="text-black/30 text-xs">Total Exp</span>
          </div>
        </div>
        <div className="border-2 border-b-3 border-gray-300 rounded-xl p-4 w-full h-20 flex space-x-2">
          <UsersIcon className="text-black/30" />
          <div className="flex flex-col">
            <span className="font-bold">0</span>
            <span className="text-black/30 text-xs">Friends</span>
          </div>
        </div>
        <div className="border-2 border-b-3 border-gray-300 rounded-xl p-4 w-full h-20 flex space-x-2">
          <BookIcon className="text-emerald-500" />
          <div className="flex flex-col">
            <span className="font-bold">4</span>
            <span className="text-black/30 text-xs">Courses</span>
          </div>
        </div>
      </div>
    </section>
  );
}