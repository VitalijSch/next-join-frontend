import { useRouter } from "next/navigation";
import { logoutUser } from "../api/logoutUser";

export function useLogoutUser() {
  const router = useRouter();

  async function handleLogoutUser() {
    await logoutUser();
    router.push("/login");
  }

  return handleLogoutUser;
}
