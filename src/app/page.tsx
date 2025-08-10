"use client";

import HeaderHome from "@/features/home/components/HeaderHome";
import { useAuthenticatedUser } from "@/features/home/hooks/useAuthenticatedUser";

export default function Home() {
  useAuthenticatedUser();

  return (
    <main className="max-w-[1920px] max-h-[1024px] w-full h-full grid [grid-template-columns:232px_auto] [grid-template-rows:96px_auto] relative">
      <HeaderHome />
    </main>
  );
}
