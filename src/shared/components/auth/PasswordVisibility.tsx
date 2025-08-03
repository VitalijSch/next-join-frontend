import { SetStateAction } from "react";
import EyeIcon from "../icons/EyeIcon";
import EyeOffIcon from "../icons/EyeOffIcon";
import PasswordIcon from "../icons/PasswordIcon";

interface PasswordVisibilityProps {
  isPasswordEmpty: boolean;
  type: "text" | "password";
  setType: React.Dispatch<SetStateAction<"password" | "text">>;
  error?: string;
}

export default function PasswordVisibility({
  isPasswordEmpty,
  type,
  setType,
  error,
}: PasswordVisibilityProps) {
  if (isPasswordEmpty)
    return (
      <PasswordIcon
        className={`${
          error ? "text-[#FF8190]" : "text-[#A8A8A8] peer-focus:text-[#29ABE2]"
        } absolute top-1/2 right-[21px] -translate-y-1/2 pointer-events-none cursor-pointer`}
      />
    );

  return (
    <div
      onClick={() => {
        if (type === "text") setType("password");
        if (type === "password") setType("text");
      }}
      className={`${
        error ? "text-[#FF8190]" : "text-[#A8A8A8] peer-focus:text-[#29ABE2]"
      } absolute top-1/2 right-[21px] -translate-y-1/2 !pointer-events-auto cursor-pointer`}
    >
      {type === "text" ? <EyeIcon /> : <EyeOffIcon />}
    </div>
  );
}
