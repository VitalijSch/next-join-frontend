"use client";

import HelpIcon from "@/shared/components/icons/HelpIcon";
import { useUserStore } from "@/shared/stores/useUserStore";
import { getInitials } from "@/shared/utils/getInitials";
import UserMenu from "./UserMenu";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderHome() {
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const pathname = usePathname();

  const user = useUserStore((state) => state.user);

  const isHelpPage = pathname.includes("/help");
  
  const isRestrictedPage =
    pathname.includes("/privacy-policy") || pathname.includes("/legal-notice");

  useEffect(() => {
    if (isRestrictedPage) {
      setOpenUserMenu(false);
    }
  }, [isRestrictedPage, pathname]);

  return (
    <header className="col-start-2 max-w-[1208px] w-full h-[96px] flex justify-between items-center pl-[116px] pr-[40px] bg-white shadow-[0px_4px_4px_0px_#0000001a]">
      <p className="text-[20px]">Kanban Project Management Tool</p>
      {!isRestrictedPage && (
        <div className="flex items-center gap-[16px]">
          {!isHelpPage && (
            <Link href="/help">
              <HelpIcon />
            </Link>
          )}
          <div
            onClick={() => setOpenUserMenu(true)}
            className={`${
              openUserMenu && "bg-[#0C2E621F]"
            } w-[56px] h-[56px] flex justify-center items-center border-3 border-[#2A3647] rounded-full cursor-pointer hover:bg-[#0C2E621F] transition-colors duration-300 ease-in-out`}
          >
            <span className="text-[20px] text-[#29ABE2] font-[700]">
              {getInitials(user.name)}
            </span>
          </div>
        </div>
      )}
      {openUserMenu && <UserMenu setOpenUserMenu={setOpenUserMenu} />}
    </header>
  );
}
