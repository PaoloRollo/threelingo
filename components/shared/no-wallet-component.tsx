import { ShieldXIcon } from "lucide-react";

export default function NoWalletComponent() {
  return (
    <section
      id="no-wallet-component"
      className="py-24 px-8 max-w-3xl mx-auto flex flex-col items-center justify-center text-center h-screen space-y-8"
    >
      <ShieldXIcon className="text-red-500" size={48} />
      <h2 className="text-xl">
        Whoops! You need to connect your wallet to start learning.
      </h2>
    </section>
  );
}
