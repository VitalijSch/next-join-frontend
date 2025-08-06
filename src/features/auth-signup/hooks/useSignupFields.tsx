import { FieldErrors, Path } from "react-hook-form";
import NameIcon from "@/shared/components/icons/NameIcon";
import EmailIcon from "@/shared/components/icons/EmailIcon";
import { SignupSchema } from "../schemas/signupSchema";
import PasswordVisibility from "@/shared/components/auth/PasswordVisibility";
import { useState } from "react";

export function useSignupFields(
  watch: (field: Path<SignupSchema>) => string,
  setExistEmailMessage: (msg: string | null) => void,
  existEmailMessage: string | null,
  errors: FieldErrors<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>
) {
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );
  const [confirmPasswordType, setConfirmPasswordType] = useState<
    "text" | "password"
  >("password");

  return [
    {
      name: "name",
      placeholder: "Name",
      type: "text",
      Icon: NameIcon,
      error: errors.name?.message,
    },
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      Icon: EmailIcon,
      error: existEmailMessage || errors.email?.message,
      onChange: () => setExistEmailMessage(null),
    },
    {
      name: "password",
      placeholder: "Password",
      type: passwordType,
      Icon: () => (
        <PasswordVisibility
          isPasswordEmpty={watch("password")?.length === 0}
          type={passwordType}
          setType={setPasswordType}
          error={errors.password?.message}
        />
      ),
      error: errors.password?.message,
    },
    {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: confirmPasswordType,
      Icon: () => (
        <PasswordVisibility
          isPasswordEmpty={watch("confirmPassword")?.length === 0}
          type={confirmPasswordType}
          setType={setConfirmPasswordType}
          error={errors.confirmPassword?.message}
        />
      ),
      error: errors.confirmPassword?.message,
    },
  ] as const;
}
