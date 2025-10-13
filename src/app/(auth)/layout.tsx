"use client";

import FooterAuth from "@/features/auth/components/FooterAuth";
import HeaderAuth from "@/features/auth/components/HeaderAuth";
import useMarkIntroSeenAfterDelay from "@/features/auth/hooks/useMarkIntroSeenAfterDelay";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useMarkIntroSeenAfterDelay();

  return (
    <section className="max-w-[1440px] max-h-[1024px] w-full h-full pt-[67px] pr-[122px] pb-[40px] pl-[77px] flex flex-col justify-between items-center relative">
      <HeaderAuth />
      {children}
      <FooterAuth />
    </section>
  );
}
