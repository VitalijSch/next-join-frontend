import { useState } from "react";
import { createUser } from "../api/createUser";
import { useLoading } from "@/shared/contexts/LoadingContext";
import { SignupSchema } from "../schemas/signupSchema";
import { useToast } from "@/shared/hooks/useToast";

export function useSignupForm(reset: () => void) {
  const [checked, setChecked] = useState(false);
  const [privacyPolicyMessage, setPrivacyPolicy] = useState(false);
  const [existEmailMessage, setExistEmailMessage] = useState<string | null>(
    null
  );

  const { startLoading, stopLoading } = useLoading();

  const showSuccessToast = useToast();

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
    const res = await createUser(userData);
    stopLoading();
    if (!("name" in res)) {
      showEmailExistsError(res.email[0]);
      return;
    }
    showSuccessToast(3000, "/login");
    resetAfterSuccess();
  }

  function showEmailExistsError(error: string) {
    setExistEmailMessage(error);
  }

  function resetAfterSuccess() {
    reset();
    setPrivacyPolicy(false);
    setChecked(false);
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
