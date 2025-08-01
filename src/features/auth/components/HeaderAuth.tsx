"use client";

import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import LogoIcon from "@/shared/components/icons/LogoIcon";
import { usePathname, useRouter } from "next/navigation";

export default function HeaderAuth() {
  const router = useRouter();
  const pathname = usePathname();

  function handleSignup() {
    router.push("/signup");
  }

  return (
    <header className="w-full h-[135px] flex justify-between relative">
      <LogoIcon className="w-[100px] h-[122px] self-end text-[#2A3647]" />
      {pathname.includes("/login") && (
        <div className="h-fit flex items-center gap-[35px]">
          <p className="text-[20px]">Not a Join user?</p>
          <BackgroundButton
            handleOnClick={handleSignup}
            classButton="w-[91px] h-[49px] py-[15px] px-[16px]"
            classSpan="text-[16px]"
            name="Sign up"
          />
        </div>
      )}
    </header>
  );
}
