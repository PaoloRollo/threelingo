"use client";

import { useWeb3Auth } from "@/hooks/use-web3-auth";
import { useUserStore } from "@/lib/store/user-store";
import { Button } from "@nextui-org/react";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { web3Auth, loading, signIn } = useWeb3Auth();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user) {
      router.push("/learn");
    }
  }, [user]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative">
      <ArrowLeftIcon
        className="absolute top-4 left-4 cursor-pointer opacity-20"
        size={32}
        onClick={() => router.push("/")}
      />
      <h1 className="font-extrabold text-3xl text-primary px-4">threelingo</h1>
      <div className="p-4 max-w-3xl">
        <Button
          variant="solid"
          color="primary"
          className="mt-4"
          isDisabled={!web3Auth}
          isLoading={loading}
          fullWidth
          onClick={() => signIn()}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
