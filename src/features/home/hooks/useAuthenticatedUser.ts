import { getUser } from "@/features/home/api/getUser";
import { useUserStore } from "@/shared/stores/useUserStore";
import getToken from "@/shared/utils/getToken";
import { useEffect } from "react";

export function useAuthenticatedUser() {
  const token = getToken();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    async function checkIfUserLogged() {
      if (token) {
        const user = await getUser(token);
        setUser(user);
      }
    }
    checkIfUserLogged();
  }, [token, setUser]);
}
