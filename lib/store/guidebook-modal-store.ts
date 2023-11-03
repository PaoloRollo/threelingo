import { create } from "zustand";

type GuidebookModalStore = {
  open: boolean;
  toggleGuidebookModal: () => void;
  target: any;
  setTarget: (target: any) => void;
};

export const useGuidebookModalStore = create<GuidebookModalStore>((set) => ({
  open: false,
  toggleGuidebookModal: () => set((state) => ({ open: !state.open })),
  target: undefined,
  setTarget: (target) => set({ target }),
}));
