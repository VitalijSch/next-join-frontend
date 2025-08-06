import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "../api/createUser";
import { useToastMessageStore } from "@/shared/stores/useToastMessageStore";
import { useLoading } from "@/shared/contexts/LoadingContext";
import { SignupSchema } from "../schemas/signupSchema";

export function useSignupForm(reset: () => void) {
  const [checked, setChecked] = useState(false);
  const [privacyPolicyMessage, setPrivacyPolicy] = useState(false);
  const [existEmailMessage, setExistEmailMessage] = useState<string | null>(
    null
  );

  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();
  const setShowToastMessage = useToastMessageStore(
    (state) => state.setShowToastMessage
  );

  async function handleSignup(data: SignupSchema) {
    clearPreviousErrors();
    if (!isPrivacyPolicyAccepted()) {
      promptPrivacyPolicy();
      return;
    }
    const userData = extractUserData(data);
    await processUserSignup(userData);
  }

  function clearPreviousErrors() {
    setExistEmailMessage(null);
  }

  function isPrivacyPolicyAccepted(): boolean {
    return checked;
  }

  function promptPrivacyPolicy() {
    setPrivacyPolicy(true);
  }

  function extractUserData(data: SignupSchema) {
    const { confirmPassword, ...userData } = data;
    return userData;
  }

  async function processUserSignup(
    userData: Omit<SignupSchema, "confirmPassword">
  ) {
    startLoading();
    const response = await createUser(userData);
    stopLoading();
    if (response.error) {
      showEmailExistsError(response.error);
      return;
    }
    handleSignupSuccess();
  }

  function showEmailExistsError(error: string) {
    setExistEmailMessage(error);
  }

  function handleSignupSuccess() {
    setShowToastMessage(true);
    setTimeout(() => {
      resetAfterSuccess();
      navigateToLogin();
    }, 3000);
  }

  function resetAfterSuccess() {
    reset();
    setShowToastMessage(false);
    setPrivacyPolicy(false);
    setChecked(false);
  }

  function navigateToLogin() {
    router.push("/login");
  }

  return {
    handleSignup,
    checked,
    setChecked,
    privacyPolicyMessage,
    existEmailMessage,
    setExistEmailMessage,
  };
}
