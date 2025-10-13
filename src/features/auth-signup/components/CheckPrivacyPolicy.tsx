import CheckedBoxIcon from "@/shared/components/icons/CheckedBoxIcon";
import CheckboxIcon from "@/shared/components/icons/CheckboxIcon";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface CheckPrivacyPolicyProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  privacyPolicyMessage: boolean;
}

export default function CheckPrivacyPolicy({
  checked,
  setChecked,
  privacyPolicyMessage,
}: CheckPrivacyPolicyProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-[8px]">
        <div
          onClick={() => setChecked(!checked)}
          className="w-[24px] h-[24px] flex justify-center items-center rounded-full cursor-pointer hover:bg-[#EDF2FA] transition-colors duration-300 ease-in-out"
        >
          {!checked && <CheckboxIcon />}
          {checked && <CheckedBoxIcon />}
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
    </div>
  );
}
