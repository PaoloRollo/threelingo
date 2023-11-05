import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { claimLinkGasless } from "@squirrel-labs/peanut-sdk";
import { useUserStore } from "@/lib/store/user-store";
import { usePeanutModalStore } from "@/lib/store/peanut-modal-store";

interface PeanutModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

export const PeanutModal = ({
  isOpen,
  onOpen,
  onOpenChange,
}: PeanutModalProps) => {
  const defaultLink = usePeanutModalStore((state) => state.defaultLink);
  const [peanutLink, setPeanutLink] = useState<string>(defaultLink);
  const address = useUserStore((state) => state.address);
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="sm"
        placement="bottom"
        // scrollBehavior="inside"
      >
        <ModalContent className="text-foreground">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold">Claim your NFT</h1>
                </div>
                Claim your course NFT using the Peanut Protocol link.
              </ModalHeader>
              <ModalBody className="flex flex-col overflow-scroll">
                <Input value={peanutLink} onValueChange={setPeanutLink} />
                <Button
                  color={success ? "success" : "primary"}
                  variant="solid"
                  onClick={async () => {
                    const { status } = await claimLinkGasless({
                      link: peanutLink,
                      recipientAddress: address,
                      APIKey: process.env.NEXT_PUBLIC_PEANUT_API_KEY as string,
                    });
                    setSuccess(status === "success");
                  }}
                >
                  Claim
                </Button>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
