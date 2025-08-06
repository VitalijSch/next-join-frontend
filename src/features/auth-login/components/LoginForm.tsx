"use client";

import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import BorderButton from "@/shared/components/buttons/BorderButton";
import InputField from "@/shared/components/auth/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "../schemas/loginSchema";
import { useLoginForm } from "../hooks/useLoginForm";
import { useLoginFields } from "../hooks/useLoginFields";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const {
    handleLogin,
    handleGuestLogin,
    emailError,
    passwordError,
    setEmailError,
    setPasswordError,
  } = useLoginForm();

  const inputFields = useLoginFields(
    watch,
    setEmailError,
    setPasswordError,
    emailError,
    passwordError,
    errors
  );

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col items-center gap-[24px] my-[32px]"
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
      <div className="flex items-center gap-[35px]">
        <BackgroundButton
          type="submit"
          classButton="w-[110px] h-[48px]"
          classSpan="text-[21px]"
          name="Log in"
        />
        <BorderButton
          type="button"
          classButton="w-[177px] h-[48px]"
          classSpan="text-[21px]"
          name="Guest Log in"
          handleOnClick={handleGuestLogin}
        />
      </div>
    </form>
  );
}
