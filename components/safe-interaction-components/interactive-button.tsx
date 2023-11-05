import { Button } from "@nextui-org/react";
import { useState } from "react";
import { deploySafeAndReturnAddress, makeSafeTransferSingleSign, addSignAndChangeThreshold } from "@/lib/safe/deploySafe";
import { Signer } from "ethers";
import { useWeb3Auth } from "@/hooks/use-web3-auth";
import { deployERC20SmartContract, readERC20SmartContract, transferERC20ToSmartContract, receiveFunds } from "@/lib/smart-contracts";

export default function InteractiveButton({
  func,
  onSuccess,
  onFailure,
}: {
  func: (signer?: Signer) => Promise<boolean>;
  onSuccess: () => void;
  onFailure: () => string;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | undefined>(undefined);
  const { provider } = useWeb3Auth();

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
            const signer = provider.getSigner();
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
): ((signer?: Signer) => Promise<boolean>) => {
  let prefix = "interaction-safe";
  switch (stepName) {
    case `${prefix}-deploy`:
      return addSignAndChangeThreshold;
    case `${prefix}-transfer`:
      return addSignAndChangeThreshold;
    case `${prefix}-addSigner`:
      return addSignAndChangeThreshold;
    default:
      return makeSafeTransferSingleSign;
  }
};

export const stepToPolygonFunction = (
  stepName: string
): ((signer?: Signer) => Promise<boolean>) => {
  let prefix = "interaction-p-zkevm";
  switch (stepName) {
    case `${prefix}-receive`:
      return receiveFunds;
    case `${prefix}-deploy`:
      return deployERC20SmartContract;
    case `${prefix}-read`:
      return readERC20SmartContract;
    case `${prefix}-write`:
      return transferERC20ToSmartContract;
    case `${prefix}-view`:
      return readERC20SmartContract;
    default:
      return readERC20SmartContract;
  }
};
