"use client";

import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import LogoIcon from "@/shared/components/icons/LogoIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useMounted from "../hooks/useMounted";

export default function HeaderAuth() {
  const pathname = usePathname();
  const isMounted = useMounted();

  return (
    <header className="w-full h-[135px] flex justify-end">
      <LogoIcon
        className={`${
          isMounted && !sessionStorage.getItem("intro") ? "animate-topLeft" : ""
        } absolute top-[80px] left-[77px] z-10 w-[100px] h-[122px] text-[#2A3647]`}
      />
      {pathname.includes("/login") && (
        <div
          className={`${
            isMounted && !sessionStorage.getItem("intro")
              ? "animate-fadeIn"
              : ""
          } h-fit flex items-center gap-[35px]`}
        >
          <p className="text-[20px]">Not a Join user?</p>
          <Link href="/signup">
            <BackgroundButton
              classButton="w-[91px] h-[49px] py-[15px] px-[16px]"
              classSpan="text-[16px]"
              name="Sign up"
            />
          </Link>
        </div>
      )}
    </header>
  );
}
