import { SetStateAction } from "react";
import EyeIcon from "../icons/EyeIcon";
import EyeOffIcon from "../icons/EyeOffIcon";
import PasswordIcon from "../icons/PasswordIcon";

interface PasswordVisibilityProps {
  isPasswordEmpty: boolean;
  type: "text" | "password";
  setType: React.Dispatch<SetStateAction<"password" | "text">>;
}

export default function PasswordVisibility({
  isPasswordEmpty,
  type,
  setType,
}: PasswordVisibilityProps) {
  if (isPasswordEmpty)
    return (
      <PasswordIcon className="absolute top-1/2 right-[21px] -translate-y-1/2 text-[#A8A8A8] pointer-events-none cursor-pointer peer-focus:text-[#29ABE2]" />
    );

  return (
    <div
      onClick={() => {
        if (type === "text") setType("password");
        if (type === "password") setType("text");
      }}
      className="absolute top-1/2 right-[21px] -translate-y-1/2 text-[#A8A8A8] !pointer-events-auto cursor-pointer peer-focus:text-[#29ABE2]"
    >
      {type === "text" ? <EyeIcon /> : <EyeOffIcon />}
    </div>
  );
}
