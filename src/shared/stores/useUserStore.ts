import { create } from "zustand";
import { User } from "../interfaces/user";

interface UserStore {
  user: User;
  setUser: (value: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: 0,
    name: "",
    email: "",
  },
  setUser: (user) => set({ user }),
}));
