"use client";

import { useGuidebookModalStore } from "@/lib/store/guidebook-modal-store";
import { GuidebookModal } from "./shared/modals/guidebook-modal";
import { useStepModalStore } from "@/lib/store";
import { StepModal } from "./shared/modals/step-modal";

export default function ModalsWrapper() {
  const guidebookOpen = useGuidebookModalStore((state) => state.open);
  const toggleGuidebook = useGuidebookModalStore(
    (state) => state.toggleGuidebookModal
  );
  const stepModalOpen = useStepModalStore((state) => state.open);
  const toggleStepModal = useStepModalStore((state) => state.toggleStepModal);

  return (
    <>
      <GuidebookModal
        isOpen={guidebookOpen}
        onOpen={toggleGuidebook}
        onOpenChange={toggleGuidebook}
      />
      <StepModal
        isOpen={stepModalOpen}
        onOpen={toggleStepModal}
        onOpenChange={toggleStepModal}
      />
    </>
  );
}
