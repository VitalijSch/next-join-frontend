import { FieldErrors, Path } from "react-hook-form";
import EmailIcon from "@/shared/components/icons/EmailIcon";
import PasswordVisibility from "@/shared/components/auth/PasswordVisibility";
import { useState } from "react";
import { LoginSchema } from "../schemas/loginSchema";

export function useLoginFields(
  watch: (field: Path<LoginSchema>) => string,
  emailPasswordError: string | null,
  setEmailPasswordError: (msg: string | null) => void,
  errors: FieldErrors<{
    email: string;
    password: string;
  }>
) {
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );

  return [
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      Icon: EmailIcon,
      error: errors.email?.message,
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
      error: emailPasswordError || errors.password?.message,
      onChange: () => setEmailPasswordError(null),
    },
  ] as const;
}
