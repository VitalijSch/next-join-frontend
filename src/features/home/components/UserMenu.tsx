import Link from "next/link";
import { menuLinks } from "../data/menuLinks";
import { Dispatch, SetStateAction } from "react";
import { logoutUser } from "../utils/logoutUser";

interface UserMenuProps {
  setOpenUserMenu: Dispatch<SetStateAction<boolean>>;
}

export default function UserMenu({ setOpenUserMenu }: UserMenuProps) {
  return (
    <div
      onClick={() => setOpenUserMenu(false)}
      className="absolute inset-0 pt-[96px] pr-[20px] flex justify-end"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[150px] h-fit p-[10px] bg-[#2A3647] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] shadow-[0px_0px_4px_0px_#0000001a]"
      >
        {menuLinks.map((link, index) => {
          if (link.name === "Log out") {
            return (
              <button
                key={index}
                onClick={() => logoutUser()}
                className="w-full h-[46px] flex justify-center items-center text-[#CDCDCD] rounded-[8px] cursor-pointer hover:bg-[#2A3D59] transition-colors duration-300 ease-in-out"
              >
                {link.name}
              </button>
            );
          }
          return (
            <Link
              key={index}
              href={link.href}
              className="w-full h-[46px] flex justify-center items-center text-[#CDCDCD] rounded-[8px] hover:bg-[#2A3D59] transition-colors duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
