"use client";

import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import LogoIcon from "@/shared/components/icons/LogoIcon";
import { usePathname, useRouter } from "next/navigation";
import { useIntroStore } from "../stores/useIntroStore";

export default function HeaderAuth() {
  const router = useRouter();
  const pathname = usePathname();

  const hasSeenIntro = useIntroStore((state) => state.hasSeenIntro);

  function handleSignup() {
    router.push("/signup");
  }

  if (hasSeenIntro === null) {
    return null;
  }

  return (
    <header className="w-full h-[135px] flex justify-end">
      <LogoIcon
        className={`${
          !hasSeenIntro && "animate-topLeft"
        } absolute top-[80px] left-[77px] z-10 w-[100px] h-[122px] text-[#2A3647]`}
      />
      {pathname.includes("/login") && (
        <div
          className={`${
            !hasSeenIntro && "animate-fadeIn"
          } h-fit flex items-center gap-[35px]`}
        >
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
