"use client";

import LogoIcon from "@/shared/components/icons/LogoIcon";
import { sidebarLinks } from "../data/sidebarLinks";
import { links } from "@/features/auth/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarHome() {
  const pathname = usePathname();

  return (
    <section className="row-start-1 row-end-3 flex flex-col justify-between items-center py-[64px] bg-[#2A3647]">
      <LogoIcon className="w-[100px] h-[122px] text-[#ffffff]" />
      <div className="w-full flex flex-col items-center gap-[15px]">
        {sidebarLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <Link
              key={index}
              href={link.href}
              className={`${
                pathname.includes(link.href) && "!bg-[#091931]"
              } group w-full flex items-center gap-[8px] py-[8px] pl-[56px] hover:bg-[#2D3C56] cursor-pointer transition-colors duration-300 ease-in-out`}
            >
              <Icon
                className={`${
                  pathname.includes(link.href) && "text-white"
                } text-[#CDCDCD] group-hover:text-white transition-colors duration-300 ease-in-out`}
              />
              <span
                className={`${
                  pathname.includes(link.href) && "text-white"
                } text-[#CDCDCD] group-hover:text-white transition-colors duration-300 ease-in-out`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="w-full flex flex-col gap-[16px] pt-[243px] pl-[56px]">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${link.className} text-[#A8A8A8] hover:text-[#29ABE2] hover:font-[700] transition-all duration-300 ease-in-out`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
