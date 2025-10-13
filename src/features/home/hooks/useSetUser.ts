import { useUserStore } from "@/shared/stores/useUserStore";
import { useEffect } from "react";
import { getUser } from "../api/getUser";
import { getRefreshToken } from "../api/getRefreshToken";
import { useLogoutUser } from "./useLogoutUser";
import { useLoading } from "@/shared/contexts/LoadingContext";
import { Token } from "../interfaces/token";
import { User } from "@/shared/interfaces/user";

export function useSetUser() {
  const { startLoading, stopLoading } = useLoading();

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const handleLogoutUser = useLogoutUser();

  async function handleGetUser() {
    startLoading();
    try {
      const user = await getUser();
      handleUserResponse(user);
    } finally {
      stopLoading();
    }
  }

  function handleUserResponse(user: User) {
    if (isAuthError(user)) {
      handleAuthError();
    } else {
      setUser(user);
    }
  }

  function isAuthError(user: User) {
    return user?.detail === "Authentication credentials were not provided.";
  }

  async function handleAuthError() {
    const token = await getRefreshToken();
    if (isInvalidToken(token)) {
      await handleLogoutUser();
    }
  }

  function isInvalidToken(token: Token) {
    return (
      token?.error === "Refresh token not provided" ||
      token?.error === "Invalid token"
    );
  }

  useEffect(() => {
    if (user.id === 0) handleGetUser();
  }, [user]);
}
