"use client";
import { Button } from "@nextui-org/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { LockIcon } from "lucide-react";
import { useAccount } from "wagmi";

export default function LearnWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();

  if (!address || !isConnected) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
        <LockIcon size={32} className="text-black/80" />
        <h1 className="text-black/80 text-2xl">
          Whoops! Seems like you are a click away.
        </h1>
        <Button
          color="primary"
          className="font-bold uppercase tracking-widest text-white"
          onClick={() => open()}
        >
          Connect Wallet
        </Button>
      </div>
    );
  }

  return children;
}
