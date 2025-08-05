"use client";

import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import BorderButton from "@/shared/components/buttons/BorderButton";
import EmailIcon from "@/shared/components/icons/EmailIcon";
import InputField from "@/shared/components/auth/InputField";
import { useState } from "react";
import PasswordVisibility from "@/shared/components/auth/PasswordVisibility";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "../schemas/loginSchema";
import { loginUser } from "../api/loginUser";
import LoadingIcon from "@/shared/components/icons/LoadingIcon";

export default function LoginForm() {
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data: LoginSchema) {
    setEmailError(null);
    setPasswordError(null);
    setLoading(true);
    const response = await loginUser(data);
    setLoading(false);
    if (response.emailError) {
      setEmailError(response.emailError);
      setTimeout(() => {
        setEmailError(null);
        return;
      }, 2000);
    }
    if (response.passwordError) {
      setPasswordError(response.passwordError);
      setTimeout(() => {
        setPasswordError(null);
        return;
      }, 2000);
    }
    console.log(response);
  }

  function handleGuestLogin() {
    console.log("Guest Login");
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col items-center gap-[24px] my-[32px]"
    >
      <InputField
        placeholder="Email"
        type="email"
        name="email"
        Icon={EmailIcon}
        register={register}
        error={emailError ? emailError : errors.email?.message}
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
        error={passwordError ? passwordError : errors.password?.message}
      />
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
      {loading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/20">
          <LoadingIcon />
        </div>
      )}
    </form>
  );
}
