import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

import { useGuidebookModalStore } from "@/lib/store/guidebook-modal-store";

interface GuidebookModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

export const GuidebookModal = ({
  isOpen,
  onOpen,
  onOpenChange,
}: GuidebookModalProps) => {
  const target = useGuidebookModalStore((state) => state.target);
  const toggleGuidebook = useGuidebookModalStore(
    (state) => state.toggleGuidebookModal
  );
  const [content, setContent] = useState<string>("");

  if (!target) {
    return (
      <>
        <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="text-foreground">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  No guidebook found!
                </ModalHeader>
                <ModalBody>
                  <p>
                    You are trying to access a guidebook that does not exist.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        placement="center"
        backdrop="blur"
        scrollBehavior="inside"
      >
        <ModalContent className="text-foreground">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <Image src={target.image} className="h-12" />
                  <h1 className="text-2xl font-bold">{target.name}</h1>
                </div>
                Guidebook Unit {target.currentUnit + 1}
              </ModalHeader>
              <ModalBody className="flex flex-col overflow-scroll">
                <p>{target.description}</p>
                <p>{target.description}</p>
                <p>{target.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
