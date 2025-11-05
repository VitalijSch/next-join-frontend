import { useRouter } from "next/navigation";
import { useToastMessageStore } from "../stores/useToastMessageStore";

export function useToast() {
  const router = useRouter();

  const setShowToastMessage = useToastMessageStore(
    (state) => state.setShowToastMessage
  );

  function showSuccessToast(timeout: number, navigate?: string) {
    setShowToastMessage(true);
    setTimeout(() => {
      setShowToastMessage(false);
      if (navigate) router.push(navigate);
    }, timeout);
  }

  return showSuccessToast;
}
