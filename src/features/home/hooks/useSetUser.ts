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

  useEffect(() => {
    if (user.id === 0) {
      async function handleGetRefreshToken() {
        startLoading();
        const refreshToekn = await getRefreshToken();
        stopLoading();
        return refreshToekn;
      }

      async function handleGetUser() {
        startLoading();
        const user = await getUser();
        stopLoading();
        if (user.detail === "Authentication credentials were not provided.") {
          const token = await handleGetRefreshToken();
          if (
            token.error === "Refresh token not provided" ||
            token.error === "Invalid token"
          ) {
            await handleLogoutUser();
          }
        } else {
          setUser(user);
        }
      }

      handleGetUser();
    }
  }, [handleLogoutUser, setUser, user]);
}
