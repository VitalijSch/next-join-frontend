"use client";

import { useForm } from "react-hook-form";
import { SignupSchema, signupSchema } from "../schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import InputField from "@/shared/components/auth/InputField";
import CheckPrivacyPolicy from "./CheckPrivacyPolicy";
import { useSignupForm } from "../hooks/useSignupForm";
import { useSignupFields } from "../hooks/useSignupFields";

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

  const {
    handleSignup,
    checked,
    setChecked,
    privacyPolicyMessage,
    existEmailMessage,
    setExistEmailMessage,
  } = useSignupForm(reset);

  const inputFields = useSignupFields(
    watch,
    setExistEmailMessage,
    existEmailMessage,
    errors
  );

  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="flex flex-col items-center gap-[24px] my-[32px] relative"
    >
      {inputFields.map((field) => (
        <InputField
          key={field.name}
          placeholder={field.placeholder}
          type={field.type}
          name={field.name}
          Icon={field.Icon}
          register={register}
          error={field.error}
        />
      ))}
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
    </form>
  );
}
