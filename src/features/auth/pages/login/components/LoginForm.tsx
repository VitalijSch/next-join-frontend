"use client";

import BackgroundButton from "@/components/buttons/BackgroundButton";
import BorderButton from "@/components/buttons/BorderButton";
import EmailIcon from "@/components/icons/EmailIcon";
import PasswordIcon from "@/components/icons/PasswordIcon";
import InputFieldPage from "@/features/auth/components/InputFieldPage";

export default function LoginForm() {
  function handleLogin() {
    console.log("Login");
  }

  function handleGuestLogin() {
    console.log("Guest Login");
  }

  return (
    <form className="flex flex-col items-center gap-[32px] my-[32px]">
      <InputFieldPage
        placeholder="Email"
        type="email"
        name="email"
        Icon={EmailIcon}
      />
      <InputFieldPage
        placeholder="Password"
        type="password"
        name="password"
        Icon={PasswordIcon}
      />
      <div className="flex items-center gap-[35px]">
        <BackgroundButton
          type="submit"
          classButton="w-[110px] h-[48px]"
          classSpan="text-[21px]"
          name="Log in"
          handleOnClick={handleLogin}
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
