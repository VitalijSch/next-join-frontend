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

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );

  const [confirmPasswordType, setConfirmPasswordType] = useState<
    "text" | "password"
  >("password");

  const [checked, setChecked] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSignup() {
    console.log("Signup");
  }

  return (
    <form className="flex flex-col items-center gap-[24px] my-[32px]">
      <InputField
        placeholder="Name"
        type="text"
        name="name"
        Icon={NameIcon}
        value={formData.name}
        onChange={handleChange}
      />
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
      <InputField
        placeholder="Confirm Password"
        type={confirmPasswordType}
        name="confirmPassword"
        Icon={() => (
          <PasswordVisibility
            isPasswordEmpty={formData.confirmPassword.length === 0}
            type={confirmPasswordType}
            setType={setConfirmPasswordType}
          />
        )}
        value={formData.confirmPassword}
        onChange={handleChange}
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
      <div className="flex items-center gap-[35px]">
        <BackgroundButton
          type="submit"
          classButton="w-[126px] h-[55px]"
          classSpan="text-[21px]"
          name="Sign up"
          handleOnClick={handleSignup}
        />
      </div>
    </form>
  );
}
