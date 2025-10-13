import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useOpenUserMenu() {
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const pathname = usePathname();

  const isHelpPage = pathname.includes("/help");

  const isRestrictedPage =
    pathname.includes("/privacy-policy") || pathname.includes("/legal-notice");

  useEffect(() => {
    if (isRestrictedPage) {
      setOpenUserMenu(false);
    }
  }, [isRestrictedPage, pathname]);

  return {
    isRestrictedPage,
    isHelpPage,
    openUserMenu,
    setOpenUserMenu,
  };
}
