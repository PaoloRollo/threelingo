import { Button } from "@nextui-org/react";
import { useState } from "react";
import { deploySafeAndReturnAddress } from "@/lib/safe/deploySafe";

export default function InteractiveButton({
  func,
  onSuccess,
  onFailure,
}: {
  func: () => Promise<boolean>;
  onSuccess: () => void;
  onFailure: () => string;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | undefined>(undefined);

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
            await func();
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
