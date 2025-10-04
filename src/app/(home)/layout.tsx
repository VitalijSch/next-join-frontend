"use client";

import HeaderHome from "@/features/home/components/HeaderHome";
import SidebarHome from "@/features/home/components/SidebarHome";
import { useSetUser } from "@/features/home/hooks/useSetUser";
import { LoadingProvider } from "@/shared/contexts/LoadingContext";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useSetUser();

  return (
    <LoadingProvider>
      <main className="max-w-[1440px] max-h-[1024px] w-full h-full grid [grid-template-columns:232px_auto] [grid-template-rows:96px_auto] relative">
        <HeaderHome />
        {children}
        <SidebarHome />
      </main>
    </LoadingProvider>
  );
}
