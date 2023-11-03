"use client";

import { useGuidebookModalStore } from "@/lib/store/guidebook-modal-store";
import { GuidebookModal } from "./shared/modals/guidebook-modal";

export default function ModalsWrapper() {
  const guidebookOpen = useGuidebookModalStore((state) => state.open);
  const toggleGuidebook = useGuidebookModalStore(
    (state) => state.toggleGuidebookModal
  );

  return (
    <GuidebookModal
      isOpen={guidebookOpen}
      onOpen={toggleGuidebook}
      onOpenChange={toggleGuidebook}
    />
  );
}
