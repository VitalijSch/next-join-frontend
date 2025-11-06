import { useLoading } from "@/shared/contexts/LoadingContext";
import { LoginSchema } from "../schemas/loginSchema";
import { loginUser } from "../api/loginUser";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/shared/stores/useUserStore";
import { User } from "@/shared/interfaces/user";

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
    const res = await loginUser(data);
    if ("non_field_errors" in res) handleLoginErrors(res.non_field_errors[0]);
    if ("user" in res) handleLoginSuccess(res.user);
    stopLoading();
  }

  function resetError() {
    setEmailPasswordError(null);
  }

  function handleLoginErrors(message: string) {
    setEmailPasswordError(message);
    setTimeout(() => {
      setEmailPasswordError(null);
    }, 2000);
  }

  function handleLoginSuccess(user: User) {
    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
    });
    navigateToLangdingPage();
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
