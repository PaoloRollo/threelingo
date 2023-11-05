"use client";
import { cn } from "@nextui-org/react";
import { HomeIcon, LogOutIcon, TrophyIcon, UserIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useAccount, useDisconnect } from "wagmi";

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
    href: "/learn/profile",
  },
];

export default function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="hidden md:flex flex-col py-6 px-4 border-r-2  h-screen justify-between fixed z-10">
      <div className="flex flex-col space-y-8">
        <h1 className="font-extrabold text-3xl text-primary px-4">
          threelingo
        </h1>
        <div className="grid grid-cols-1 gap-y-4">
          {menuItems.map((item) => (
            <div
              key={item.href}
              className={cn(
                "hover:bg-gray-300 hover:bg-opacity-25 cursor-pointer flex space-x-4 items-center py-2 px-4 rounded-xl",
                pathname === item.href &&
                  "border-x-2 border-t-2 border-b-4 border-primary border-opacity-25"
              )}
              onClick={() => router.push(item.href)}
            >
              <item.icon
                className={cn(pathname === item.href && "text-primary")}
              />
              <h2
                className={cn(
                  "font-semibold uppercase tracking-widest text-sm",
                  pathname === item.href && "text-primary"
                )}
              >
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
      {/* <ThemeSwitcher /> */}
      {address && (
        <div
          className={cn(
            "hover:bg-gray-300 hover:bg-opacity-25 cursor-pointer flex space-x-4 items-center py-2 px-4 rounded-xl"
          )}
        >
          <LogOutIcon />
          <h2
            onClick={() => disconnect()}
            className={cn("font-semibold uppercase tracking-widest text-sm")}
          >
            Disconnect
          </h2>
        </div>
      )}
    </div>
  );
}
