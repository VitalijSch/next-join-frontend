import { sidebarLinks } from "../data/sidebarLinks";

export function getFilteredLinks(email: string) {
  const isUserLogged = email !== "";
  return isUserLogged ? sidebarLinks.slice(1) : sidebarLinks.slice(0, 1);
}
