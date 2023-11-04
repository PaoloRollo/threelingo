import {Button} from "@nextui-org/react";
import {useState} from "react";
import {deploySafeAndReturnAddress, makeSafeTransferSingleSign, addSignAndChangeThreshold} from "@/lib/safe/deploySafe";

export default function InteractiveButton({
                                              func,
                                              onSuccess, onFailure
                                          }: {
    func: () => Promise<boolean>,
    onSuccess: () => void
    onFailure: () => string
}) {
    const [loading, setLoading] = useState<boolean>(false)
    return <div className="flex flex-col space-y-4 mt-4">
        <Button
            onClick={async () => {
                if (loading) return;
                setLoading(true)
                try {
                    await func()
                } catch (e) {
                    onFailure()
                } finally {
                    setLoading(false)
                    onSuccess()
                }
            }}
        >
            Yes, let&apos;s do it!
        </Button>
    </div>
}

export const stepToSafeFunction = (stepName: string): (() => Promise<boolean>) => {
    let prefix = "interaction-safe";
    switch (stepName) {
        case `${prefix}-deploy`:
            return deploySafeAndReturnAddress;
        case `${prefix}-transfer`:
            return makeSafeTransferSingleSign;
        case `${prefix}-addSigner`:
            return addSignAndChangeThreshold;
        default:
            return () => deploySafeAndReturnAddress();
    }
}

