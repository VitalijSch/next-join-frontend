import { create } from "zustand";

interface IntroState {
  hasSeenIntro: boolean | null;
  setHasSeenIntro: (value: boolean) => void;
}

export const useIntroStore = create<IntroState>((set) => ({
  hasSeenIntro: null,
  setHasSeenIntro: (value) => set({ hasSeenIntro: value }),
}));
