"use client";

import { useWeb3Auth } from "@/hooks/use-web3-auth";
import { Button } from "@nextui-org/react";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [userEmail, setUserEmail] = useState<string>("");
  const router = useRouter();
  const { web3Auth, loading, user } = useWeb3Auth();
  console.log(web3Auth, user);

  const loginUser = async () => {
    try {
      //   await supabaseBrowser.auth.signInWithOtp({
      //     email: userEmail,
      //     options: { emailRedirectTo: `${window.origin}/api/auth/callback` },
      //   });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (web3Auth) {
      web3Auth.getAddress().then((address) => {
        console.log("ADDRESS", address);
        if (address) {
          router.push("/learn");
        }
      });
    }
  }, [web3Auth]);

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
          onClick={() => web3Auth?.signIn()}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
