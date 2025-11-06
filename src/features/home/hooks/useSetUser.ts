import { useUserStore } from "@/shared/stores/useUserStore";
import { useEffect } from "react";
import { getUser } from "../api/getUser";
import { getRefreshToken } from "../api/getRefreshToken";
import { useLogoutUser } from "./useLogoutUser";
import { useLoading } from "@/shared/contexts/LoadingContext";

export function useSetUser() {
  const { startLoading, stopLoading } = useLoading();

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const handleLogoutUser = useLogoutUser();

  async function handleGetUser() {
    startLoading();
    try {
      const res = await getUser();
      if ("detail" in res) {
        handleAuthError();
        return
      }
      setUser(res.user);
    } finally {
      stopLoading();
    }
  }

  async function handleAuthError() {
    const res = await getRefreshToken();
    if ("error" in res) {
      await handleLogoutUser();
    }
  }

  useEffect(() => {
    if (user.id === 0) handleGetUser();
  }, [user]);
}
