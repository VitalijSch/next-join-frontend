"use client";

import { useOpenContacts } from "@/features/home-add-task/stores/useOpenContacts";
import HeaderHome from "@/features/home/components/HeaderHome";
import SidebarHome from "@/features/home/components/SidebarHome";
import { useSetUser } from "@/features/home/hooks/useSetUser";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useSetUser();

  const setOpen = useOpenContacts((state) => state.setOpen);

  return (
    <main
      onClick={() => setOpen(false)}
      className="max-w-[1440px] max-h-[1024px] w-full h-full grid [grid-template-columns:232px_auto] [grid-template-rows:96px_auto] relative"
    >
      <HeaderHome />
      {children}
      <SidebarHome />
    </main>
  );
}
