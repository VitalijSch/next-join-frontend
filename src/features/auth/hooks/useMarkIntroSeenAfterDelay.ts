import { useEffect } from "react";
import { useIntroStore } from "../stores/useIntroStore";

export default function useMarkIntroSeenAfterDelay() {
  const delayMs = 2000;
  const { setHasSeenIntro } = useIntroStore();

  useEffect(() => {
    setTimeout(() => {
      setHasSeenIntro(true);
    }, delayMs);
  }, [setHasSeenIntro]);
}
