import { useLoading } from "@/shared/contexts/LoadingContext";
import { LoginSchema } from "../schemas/loginSchema";
import { LoginUser, loginUser } from "../api/loginUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/shared/stores/useUserStore";

export function useLoginForm() {
  const [emailPasswordError, setEmailPasswordError] = useState<string | null>(
    null
  );

  const router = useRouter();

  const setUser = useUserStore((state) => state.setUser);

  const { startLoading, stopLoading } = useLoading();

  async function handleLogin(data: LoginSchema) {
    resetError();
    startLoading();
    const response = await loginUser(data);
    stopLoading();
    handleLoginErrors(response);
    handleLoginSuccess(response);
  }

  function resetError() {
    setEmailPasswordError(null);
  }

  function handleLoginErrors(response: LoginUser) {
    if (response.non_field_errors && response.non_field_errors[0]) {
      setEmailPasswordError(response.non_field_errors[0]);
      setTimeout(() => {
        setEmailPasswordError(null);
      }, 2000);
    }
  }

  function handleLoginSuccess(response: LoginUser) {
    if (response.user?.id && response.user?.name && response.user?.email) {
      setUser({
        id: response.user?.id,
        name: response.user?.name,
        email: response.user?.email,
      });
      navigateToLangdingPage();
    }
  }

  function navigateToLangdingPage() {
    router.push("/summary");
  }

  function handleGuestLogin() {
    console.log("Guest Login");
  }

  return {
    handleLogin,
    handleGuestLogin,
    emailPasswordError,
    setEmailPasswordError,
  };
}
