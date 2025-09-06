import { create } from "zustand";
import { Contact } from "../interfaces/contact";

interface UseContactStoreState {
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
}

export const useContactStore = create<UseContactStoreState>()((set) => ({
  contacts: [],
  setContacts: (contacts) => set({ contacts }),
}));
