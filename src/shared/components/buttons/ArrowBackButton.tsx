"use client";

import { useRouter } from "next/navigation";
import ArrowBackIcon from "../icons/ArrowBackIcon";

interface ArrowBackButtonProps {
  className: string;
}

export default function ArrowBackButton({ className }: ArrowBackButtonProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className={`${className} flex justify-center items-center rounded-full cursor-pointer hover:bg-[#EEEEEE] hover:scale-110 transition-all duration-300 ease-in-out`}
    >
      <ArrowBackIcon />
    </div>
  );
}
