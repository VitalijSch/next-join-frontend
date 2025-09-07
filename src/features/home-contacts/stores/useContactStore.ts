import { create } from "zustand";
import { Contact } from "../interfaces/contact";

interface UseContactStoreState {
  contacts: Contact[];
  selectedContact: Contact | null;
  setContacts: (contacts: Contact[]) => void;
  setSelectedContact: (contact: Contact | null) => void;
}

export const useContactStore = create<UseContactStoreState>()((set) => ({
  contacts: [],
  selectedContact: null,
  setContacts: (contacts) => set({ contacts }),
  setSelectedContact: (selectedContact) => set({ selectedContact }),
}));
