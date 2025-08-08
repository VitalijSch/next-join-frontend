import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IntroState {
  hasSeenIntro: boolean;
  setHasSeenIntro: (value: boolean) => void;
}

const sessionStorageAdapter = {
  getItem: (name: string) => {
    try {
      const value = sessionStorage.getItem(name);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  },
  setItem: (name: string, value: unknown) => {
    sessionStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    sessionStorage.removeItem(name);
  },
};

export const useIntroStore = create<IntroState>()(
  persist(
    (set) => ({
      hasSeenIntro: false,
      setHasSeenIntro: (value) => set({ hasSeenIntro: value }),
    }),
    {
      name: "intro",
      storage: sessionStorageAdapter,
    }
  )
);
