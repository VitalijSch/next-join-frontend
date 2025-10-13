import { useRouter } from "next/navigation";
import { logoutUser } from "../api/logoutUser";
import { useLoading } from "@/shared/contexts/LoadingContext";

export function useLogoutUser() {
  const router = useRouter();

  const { startLoading, stopLoading } = useLoading();

  async function handleLogoutUser() {
    startLoading();
    await logoutUser();
    stopLoading();
    router.push("/login");
  }

  return handleLogoutUser;
}
