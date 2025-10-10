import { create } from "zustand";
import { Contact } from "../interfaces/contact";

interface UseContactStoreState {
  contacts: Contact[];
  selectedContact: Contact | null;
  showToastMessage: boolean;
  scrollToContact: boolean;
  setContacts: (contacts: Contact[]) => void;
  setSelectedContact: (contact: Contact | null) => void;
  setShowToastMessage: (showToastMessage: boolean) => void;
  setScrollToContact: (scrollToContact: boolean) => void;
}

export const useContactStore = create<UseContactStoreState>()((set) => ({
  contacts: [],
  selectedContact: null,
  showToastMessage: false,
  scrollToContact: false,
  setContacts: (contacts) => set({ contacts }),
  setSelectedContact: (selectedContact) => set({ selectedContact }),
  setShowToastMessage: (showToastMessage) => set({ showToastMessage }),
  setScrollToContact: (scrollToContact) => set({ scrollToContact }),
}));
