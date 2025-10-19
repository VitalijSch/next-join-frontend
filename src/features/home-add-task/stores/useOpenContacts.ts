import { create } from "zustand";

interface UseOpenContacts {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useOpenContacts = create<UseOpenContacts>()((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
