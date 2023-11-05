"use client";
import { availableCourses } from "@/lib/courses";
import { useUserStore } from "@/lib/store/user-store";
import { sliceAddress } from "@/lib/utils";
import { Divider, Image } from "@nextui-org/react";
import { BellIcon, BellOffIcon, ClockIcon, Link2Icon } from "lucide-react";
import { checksumAddress } from "viem";
import useContractBalance from "@/hooks/use-contract-balance";
import {
  useManageSubscription,
  useSubscription,
  useW3iAccount,
  useInitWeb3InboxClient,
  useMessages,
} from "@web3inbox/widget-react";
import { useCallback, useEffect } from "react";
import { useWeb3Auth } from "@/hooks/use-web3-auth";
import { usePeanutModalStore } from "@/lib/store/peanut-modal-store";

export default function ProfileContent({
  params,
}: {
  params: { address: string };
}) {
  const { address } = params;
  const isReady = useInitWeb3InboxClient({
    // The project ID and domain you setup in the Domain Setup section
    projectId: "62066586b5adc509f3304c9312077975",
    domain: "threelingo.vercel.app",
    isLimited: false,
  });
  const { web3Auth, provider } = useWeb3Auth();
  const { account, setAccount, isRegistered, isRegistering, register } =
    useW3iAccount();
  const togglePeanutModal = usePeanutModalStore(
    (state) => state.togglePeanutModal
  );
  const loggedAddress = useUserStore((state) => state.address);
  const balance = useContractBalance(
    process.env.NEXT_PUBLIC_COURSE_TOKEN_ADDRESS as string
  );

  useEffect(() => {
    if (!address) return;
    // Convert the address into a CAIP-10 blockchain-agnostic account ID and update the Web3Inbox SDK with it
    setAccount(`eip155:1101:${address}`);
  }, [address, setAccount]);

  const performRegistration = useCallback(async () => {
    if (!address) return;
    if (!provider) return;
    try {
      const signer = provider.getSigner();
      await register((message) => signer.signMessage(message));
    } catch (registerIdentityError) {}
  }, [register, address, provider]);

  useEffect(() => {
    // Register even if an identity key exists, to account for stale keys
    if (web3Auth && address && provider) performRegistration();
  }, [performRegistration, web3Auth, address, provider]);

  const { isSubscribed, isSubscribing, subscribe, unsubscribe } =
    useManageSubscription();

  const performSubscribe = useCallback(async () => {
    // Register again just in case
    await performRegistration();
    await subscribe();
  }, [subscribe, isRegistered]);

  const { subscription } = useSubscription();
  const { messages } = useMessages();
  console.log(
    "SUBSCRIPTION",
    isSubscribing,
    isSubscribed,
    subscription,
    messages
  );

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
        <div className="flex items-center space-x-2">
          {address.toLowerCase() === loggedAddress?.toLowerCase() && (
            <Link2Icon
              size={24}
              className="text-black/40"
              onClick={() => togglePeanutModal()}
            />
          )}
          {address.toLowerCase() === loggedAddress?.toLowerCase() &&
            !isSubscribed && (
              <BellIcon
                size={24}
                className="text-black/40"
                onClick={() => {
                  performSubscribe();
                }}
              />
            )}
          {address.toLowerCase() === loggedAddress?.toLowerCase() &&
            isSubscribed && (
              <BellOffIcon
                size={24}
                className="text-black/40"
                onClick={() => {
                  unsubscribe();
                }}
              />
            )}
        </div>
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
        {balance?.length > 0 &&
          balance
            .filter((token) => token.amount > 0)
            .map((token, index) => (
              <div
                key={index}
                className="border-2 border-b-3 border-gray-300 rounded-xl p-4 w-full h-20 flex space-x-2"
              >
                <Image
                  src={availableCourses[token.tokenId]?.image}
                  className="h-8"
                  alt={availableCourses[token.tokenId].name}
                />
                <div className="flex flex-col">
                  <span className="text-black/30 text-xs">
                    {availableCourses[token.tokenId].name}
                  </span>
                </div>
              </div>
            ))}
      </div>
      {/*<Divider className="my-8"/>
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-b-3 border-gray-300 rounded-xl p-4 w-full h-20 flex space-x-2">
          <FlameIcon className="text-black/30"/>
          <div className="flex flex-col">
            <span className="font-bold">0</span>
            <span className="text-black/30 text-xs">Day streak</span>
          </div>
        </div>
        <div className="border-2 border-b-3 border-gray-300 rounded-xl p-4 w-full h-20 flex space-x-2">
          <ZapIcon className={"text-amber-500"}/>
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
      </div>*/}
    </section>
  );
}
