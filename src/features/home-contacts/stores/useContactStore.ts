import { create } from "zustand";
import { Contact } from "../interfaces/contact";

interface UseContactStoreState {
  contacts: Contact[];
  selectedContact: Contact | null;
  scrollToContact: boolean;
  setContacts: (contacts: Contact[]) => void;
  setSelectedContact: (contact: Contact | null) => void;
  setScrollToContact: (scrollToContact: boolean) => void;
}

export const useContactStore = create<UseContactStoreState>()((set) => ({
  contacts: [],
  selectedContact: null,
  scrollToContact: false,
  setContacts: (contacts) => set({ contacts }),
  setSelectedContact: (selectedContact) => set({ selectedContact }),
  setScrollToContact: (scrollToContact) => set({ scrollToContact }),
}));
