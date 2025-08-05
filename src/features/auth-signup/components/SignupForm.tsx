"use client";

import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import EmailIcon from "@/shared/components/icons/EmailIcon";
import InputField from "@/shared/components/auth/InputField";
import NameIcon from "@/shared/components/icons/NameIcon";
import { useState } from "react";
import PasswordVisibility from "@/shared/components/auth/PasswordVisibility";
import { useForm } from "react-hook-form";
import { signupSchema, SignupSchema } from "../schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "../api/createUser";
import CheckPrivacyPolicy from "./CheckPrivacyPolicy";
import { useToastMessageStore } from "@/shared/stores/useToastMessageStore";
import { useRouter } from "next/navigation";
import LoadingIcon from "@/shared/components/icons/LoadingIcon";

export default function SignupForm() {
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );
  const [confirmPasswordType, setConfirmPasswordType] = useState<
    "text" | "password"
  >("password");
  const [checked, setChecked] = useState<boolean>(false);
  const [privacyPolicyMessage, setPrivacyPolicy] = useState<boolean>(false);
  const [existEmailMessage, setExistEmailMessage] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const setShowToastMessage = useToastMessageStore(
    (state) => state.setShowToastMessage
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  async function handleSignup(data: SignupSchema) {
    setExistEmailMessage(null);
    if (!checked) {
      setPrivacyPolicy(true);
      return;
    }
    const { confirmPassword, ...userData } = data;
    setLoading(true);
    const response = await createUser(userData);
    setLoading(false);
    if (response.error) {
      setExistEmailMessage(response.error);
      return;
    }
    handleSignupSuccess();
  }

  function handleSignupSuccess() {
    setShowToastMessage(true);
    setTimeout(() => {
      setShowToastMessage(false);
      reset();
      setPrivacyPolicy(false);
      setChecked(false);
      router.push("/login");
    }, 3000);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="flex flex-col items-center gap-[24px] my-[32px] relative"
    >
      <InputField
        placeholder="Name"
        type="text"
        name="name"
        Icon={NameIcon}
        register={register}
        error={errors.name?.message}
      />
      <InputField
        placeholder="Email"
        type="email"
        name="email"
        Icon={EmailIcon}
        register={register}
        error={existEmailMessage ? existEmailMessage : errors.email?.message}
        onChange={() => setExistEmailMessage(null)}
      />
      <InputField
        placeholder="Password"
        type={passwordType}
        name="password"
        Icon={() => (
          <PasswordVisibility
            isPasswordEmpty={watch("password")?.length === 0}
            type={passwordType}
            setType={setPasswordType}
            error={errors.password?.message}
          />
        )}
        register={register}
        error={errors.password?.message}
      />
      <InputField
        placeholder="Confirm Password"
        type={confirmPasswordType}
        name="confirmPassword"
        Icon={() => (
          <PasswordVisibility
            isPasswordEmpty={watch("confirmPassword")?.length === 0}
            type={confirmPasswordType}
            setType={setConfirmPasswordType}
            error={errors.confirmPassword?.message}
          />
        )}
        register={register}
        error={errors.confirmPassword?.message}
      />
      <CheckPrivacyPolicy
        checked={checked}
        setChecked={setChecked}
        privacyPolicyMessage={privacyPolicyMessage}
      />
      <BackgroundButton
        type="submit"
        classButton="w-[126px] h-[55px]"
        classSpan="text-[21px]"
        name="Sign up"
      />
      {loading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/20">
          <LoadingIcon />
        </div>
      )}
    </form>
  );
}
