import { useRouter } from "next/navigation";
import { useLoading } from "@/shared/contexts/LoadingContext";
import { LoginSchema } from "../schemas/loginSchema";
import { LoginUser, loginUser } from "../api/loginUser";
import { useState } from "react";

export function useLoginForm() {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();

  async function handleLogin(data: LoginSchema) {
    resetError();
    startLoading();
    const response = await loginUser(data);
    stopLoading();
    handleLoginErrors(response);
    navigateToHome();
  }

  function resetError() {
    setEmailError(null);
    setPasswordError(null);
  }

  function handleLoginErrors(response: LoginUser) {
    if (response.emailError) {
      showEmailError(response.emailError);
    }
    if (response.passwordError) {
      showPasswordError(response.passwordError);
    }
  }

  function showEmailError(error: string) {
    setEmailError(error);
    setTimeout(() => {
      setEmailError(null);
    }, 2000);
  }

  function showPasswordError(error: string) {
    setPasswordError(error);
    setTimeout(() => {
      setPasswordError(null);
    }, 2000);
  }

  function navigateToHome() {
    router.push("/");
  }

  function handleGuestLogin() {
    console.log("Guest Login");
  }

  return {
    handleLogin,
    handleGuestLogin,
    emailError,
    passwordError,
    setEmailError,
    setPasswordError,
  };
}
