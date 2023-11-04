import { create } from "zustand";

type UserStore = {
  user: any;
  setUser: (user: any) => void;
  address: string;
  setAddress: (address: string) => void;
  safes: string[];
  setSafes: (safes: string[]) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  address: "",
  setAddress: (address) => set({ address }),
  safes: [],
  setSafes: (safes) => set({ safes }),
}));
