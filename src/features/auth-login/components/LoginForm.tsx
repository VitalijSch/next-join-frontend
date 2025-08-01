"use client";

import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import BorderButton from "@/shared/components/buttons/BorderButton";
import EmailIcon from "@/shared/components/icons/EmailIcon";
import InputField from "@/shared/components/auth/InputField";
import { useState } from "react";
import PasswordVisibility from "@/shared/components/auth/PasswordVisibility";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleLogin() {
    console.log("Login");
  }

  function handleGuestLogin() {
    console.log("Guest Login");
  }

  return (
    <form className="flex flex-col items-center gap-[32px] my-[32px]">
      <InputField
        placeholder="Email"
        type="email"
        name="email"
        Icon={EmailIcon}
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        placeholder="Password"
        type={passwordType}
        name="password"
        Icon={() => (
          <PasswordVisibility
            isPasswordEmpty={formData.password.length === 0}
            type={passwordType}
            setType={setPasswordType}
          />
        )}
        value={formData.password}
        onChange={handleChange}
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
