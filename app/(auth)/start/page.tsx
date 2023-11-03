"use client";
import { Button, Link } from "@nextui-org/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAccount } from "wagmi";

export default function StartPage() {
  const [step, setStep] = useState(0);
  const [userExperience, setUserExperience] = useState<string>("");
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  const getStep = () => {
    switch (step) {
      case 1:
        if (userExperience === "experienced") {
          if (address) {
            return (
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <h2 className="text-4xl font-bold text-white">
                  You&apos;re all set up!
                </h2>
                <w3m-account-button balance="hide" />
                <Button
                  variant="light"
                  color="default"
                  as={Link}
                  href="/learn"
                  className="font-bold uppercase tracking-widest text-white"
                >
                  Start now
                </Button>
              </div>
            );
          }
          return (
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <h2 className="text-4xl font-bold text-white">
                You&apos;re not connected yet!
              </h2>
              <Button
                variant="light"
                color="default"
                onClick={() => open()}
                className="font-bold uppercase tracking-widest text-white"
              >
                Connect your wallet
              </Button>
            </div>
          );
        }
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-bold text-white">
              What is your web3 level?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, ease: "easeInOut" }}
                onClick={() => {
                  setUserExperience("beginner");
                  setStep(1);
                }}
                className="rounded-xl p-4 border-x-2 border-t-2 border-b-4 border-gray-300 dark:border-default aspect-square flex flex-col items-center justify-center space-y-2 hover:bg-gray-200/10 dark:hover:bg-content1 cursor-pointer"
              >
                {/* <Image src={course.image} className="h-20" alt={course.name} /> */}
                <p className="font-semibold tracking-wide text-white text-2xl">
                  Beginner
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, ease: "easeInOut" }}
                onClick={() => {
                  setUserExperience("experienced");
                  setStep(1);
                }}
                className="rounded-xl p-4 border-x-2 border-t-2 border-b-4 h-52 w-52 border-gray-300 dark:border-default aspect-square flex flex-col items-center justify-center space-y-2 hover:bg-gray-200/10 dark:hover:bg-content1 cursor-pointer"
              >
                {/* <Image src={course.image} className="h-20" alt={course.name} /> */}
                <p className="font-semibold tracking-wide text-white text-2xl">
                  Experienced
                </p>
              </motion.div>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="w-screen h-screen bg-primary">
      <div className="fixed py-3 w-full flex justify-around z-20 bg-primary">
        <h1 className="font-extrabold text-3xl text-white px-4">threelingo</h1>
        <Button
          variant="light"
          color="default"
          className="font-bold uppercase tracking-widest text-white"
          as={Link}
          href="/learn"
        >
          Already registered?
        </Button>
      </div>
      {getStep()}
    </main>
  );
}
