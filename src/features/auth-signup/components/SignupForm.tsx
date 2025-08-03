"use client";

import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import EmailIcon from "@/shared/components/icons/EmailIcon";
import InputField from "@/shared/components/auth/InputField";
import NameIcon from "@/shared/components/icons/NameIcon";
import { useState } from "react";
import CheckedIcon from "@/shared/components/icons/CheckedIcon";
import CheckIcon from "@/shared/components/icons/CheckIcon";
import Link from "next/link";
import PasswordVisibility from "@/shared/components/auth/PasswordVisibility";
import { useForm } from "react-hook-form";
import { signupSchema, SignupSchema } from "../schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "../api/createUser";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );

  const [confirmPasswordType, setConfirmPasswordType] = useState<
    "text" | "password"
  >("password");

  const [checked, setChecked] = useState<boolean>(false);

  const [privacyPolicyMessage, setPrivacyPolicy] = useState<boolean>(false);

  async function handleSignup(data: SignupSchema) {
    if (!checked) {
      setPrivacyPolicy(true);
      return;
    }
    const { confirmPassword, ...userData } = data;
    await createUser(userData);
    reset();
    setPrivacyPolicy(false);
    setChecked(false);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="flex flex-col items-center gap-[24px] my-[32px]"
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
        error={errors.email?.message}
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
      <div className="flex items-center gap-[8px]">
        <div
          onClick={() => setChecked(!checked)}
          className="w-[24px] h-[24px] flex justify-center items-center rounded-full cursor-pointer hover:bg-[#EDF2FA] transition-colors duration-300 ease-in-out"
        >
          {!checked && <CheckIcon />}
          {checked && <CheckedIcon />}
        </div>
        <p className="w-[200px] text-[#A8A8A8]">
          I accept the{" "}
          <Link
            href="/privacy-policy"
            className="text-[#29ABE2] hover:font-[700] transition-all duration-300 ease-in-out"
          >
            Privacy policy
          </Link>
        </p>
      </div>
      {privacyPolicyMessage && !checked && (
        <p className="h-[14px] text-[12px] text-[#FF8190]">
          You must accept the Privacy Policy.
        </p>
      )}
      <div className="flex items-center gap-[35px]">
        <BackgroundButton
          type="submit"
          classButton="w-[126px] h-[55px]"
          classSpan="text-[21px]"
          name="Sign up"
        />
      </div>
    </form>
  );
}
