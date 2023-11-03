"use client";

import { cn } from "@nextui-org/react";
import { HomeIcon, TrophyIcon, UserIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useAccount } from "wagmi";

interface MenuItem {
  name: string;
  icon: any;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Learn",
    icon: HomeIcon,
    href: "/learn",
  },
  {
    name: "Leaderboard",
    icon: TrophyIcon,
    href: "/learn/leaderboard",
  },
  {
    name: "Profile",
    icon: UserIcon,
    href: "/learn/profile/ADDRESS",
  },
];

export default function BottomBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { address } = useAccount();
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primary h-20 flex flex-row items-center justify-around z-50">
      {menuItems.map((menuItem) => (
        <menuItem.icon
          onClick={() =>
            router.push(
              menuItem.href.replaceAll("ADDRESS", address?.toLowerCase() || "")
            )
          }
          key={menuItem.name}
          className={cn(
            "text-white",
            pathname !==
              menuItem.href.replaceAll(
                "ADDRESS",
                address?.toLowerCase() || ""
              ) && "opacity-30"
          )}
          size={32}
        />
      ))}
    </div>
  );
}
