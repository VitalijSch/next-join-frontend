"use client";

import Link from "next/link";
import useMounted from "../hooks/useMounted";
import { links } from "../data/navLinks";

export default function FooterAuth() {
  const isMounted = useMounted();

  return (
    <footer
      className={`${
        isMounted && !sessionStorage.getItem("intro") ? "animate-fadeIn" : ""
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
