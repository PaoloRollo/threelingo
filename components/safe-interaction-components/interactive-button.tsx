import { Button } from "@nextui-org/react";
import { useState } from "react";
import { deploySafeAndReturnAddress } from "@/lib/safe/deploySafe";
import {Signer} from "ethers";
import {useWeb3Auth} from "@/hooks/use-web3-auth";

export default function InteractiveButton({
  func,
    signer,
  onSuccess,
  onFailure,
}: {
  func: (signer?: Signer) => Promise<boolean>;
  signer?: Signer,
  onSuccess: () => void;
  onFailure: () => string;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | undefined>(undefined);
  const { web3Auth, provider } = useWeb3Auth();
  return (
    <div className="flex flex-col space-y-4 mt-4">
      <Button
        color={
          success === true
            ? "success"
            : success === false
            ? "warning"
            : "primary"
        }
        className="text-white"
        isLoading={loading}
        onClick={async () => {
          if (loading) return;
          setLoading(true);
          try {
            await func(signer);
          } catch (e) {
            onFailure();
            setSuccess(false);
          } finally {
            setSuccess(true);
            setLoading(false);
            onSuccess();
          }
          setTimeout(() => {
            setSuccess(undefined);
          }, 2000);
        }}
      >
        Yes, let&apos;s do it!
      </Button>
    </div>
  );
}

export const stepToSafeFunction = (
  stepName: string
): (() => Promise<boolean>) => {
  let prefix = "interaction-safe";
  switch (stepName) {
    case `${prefix}-deploy`:
      return deploySafeAndReturnAddress;
    case `${prefix}-transfer`:
      return deploySafeAndReturnAddress;
    case `${prefix}-addSigner`:
      return deploySafeAndReturnAddress;
    default:
      return deploySafeAndReturnAddress;
  }
};
