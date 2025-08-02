"use client";

import Link from "next/link";
import { useIntroStore } from "../stores/useIntroStore";

export default function FooterAuth() {
  const links = [
    {
      className: "w-[125px]",
      href: "/privacy-policy",
      name: "Privacy Policy",
    },
    {
      className: "w-[112px]",
      href: "/legal-notice",
      name: "Legal notice",
    },
  ];

  const hasSeenIntro = useIntroStore((state) => state.hasSeenIntro);

  if (hasSeenIntro === null) {
    return null;
  }

  return (
    <footer
      className={`${
        !hasSeenIntro && "animate-fadeIn"
      } flex items-center gap-[16px]`}
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${link.className} text-[#A8A8A8] p-[8px] hover:text-[#29ABE2] hover:font-[700] transition-all duration-300 ease-in-out`}
        >
          {link.name}
        </Link>
      ))}
    </footer>
  );
}
