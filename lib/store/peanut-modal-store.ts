import { create } from "zustand";

type PeanutModalStore = {
  open: boolean;
  togglePeanutModal: () => void;
};

export const usePeanutModalStore = create<PeanutModalStore>((set) => ({
  open: false,
  togglePeanutModal: () => set((state) => ({ open: !state.open })),
}));
