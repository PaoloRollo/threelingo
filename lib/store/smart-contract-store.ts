import { create } from "zustand";

type SmartContractStore = {
    contractAddress: string;
};

export const useSmartContractStore = create<SmartContractStore>((set) => ({
    contractAddress: ""
}));