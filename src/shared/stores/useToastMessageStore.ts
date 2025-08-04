import { create } from "zustand";

interface ToastMessageStore {
  showToastMessage: boolean;
  setShowToastMessage: (value: boolean) => void;
}

export const useToastMessageStore = create<ToastMessageStore>((set) => ({
  showToastMessage: false,
  setShowToastMessage: (showToastMessage) => set({ showToastMessage }),
}));
