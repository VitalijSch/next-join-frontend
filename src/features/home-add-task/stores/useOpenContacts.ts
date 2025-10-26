import { create } from "zustand";

interface UseOpen {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useOpen = create<UseOpen>()((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
