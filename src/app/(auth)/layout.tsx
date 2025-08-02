"use client";

import FooterAuth from "@/features/auth/components/FooterAuth";
import HeaderAuth from "@/features/auth/components/HeaderAuth";
import { useIntroStore } from "@/features/auth/stores/useIntroStore";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setHasSeenIntro = useIntroStore((state) => state.setHasSeenIntro);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenIntro");
    const value = hasSeen === "true";
    setHasSeenIntro(value);
    if (hasSeen === null) {
      sessionStorage.setItem("hasSeenIntro", "true");
    }
  }, []);

  return (
    <section className="max-w-[1920px] max-h-[1024px] w-full h-full pt-[67px] pr-[122px] pb-[40px] pl-[77px] flex flex-col justify-between items-center relative">
      <HeaderAuth />
      {children}
      <FooterAuth />
    </section>
  );
}
