import { create } from "zustand";
import { Step } from "../interfaces";

type StepModalStore = {
  open: boolean;
  toggleStepModal: () => void;
  step: Step | undefined;
  setStep: (step: Step) => void;
};

export const useStepModalStore = create<StepModalStore>((set) => ({
  open: false,
  toggleStepModal: () => set((state) => ({ open: !state.open })),
  step: undefined,
  setStep: (step) => set({ step }),
}));
