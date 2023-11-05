import { create } from "zustand";

type PeanutModalStore = {
  open: boolean;
  togglePeanutModal: () => void;
  defaultLink: string;
  setDefaultLink: (link: string) => void;
};

export const usePeanutModalStore = create<PeanutModalStore>((set) => ({
  open: false,
  togglePeanutModal: () => set((state) => ({ open: !state.open })),
  defaultLink: "",
  setDefaultLink: (link: string) => set(() => ({ defaultLink: link })),
}));
