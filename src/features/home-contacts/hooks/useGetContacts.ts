import { useEffect } from "react";
import { useContactStore } from "../stores/useContactStore";
import { useUserStore } from "@/shared/stores/useUserStore";
import { getContacts } from "../api/getContacts";
import { useLoading } from "@/shared/contexts/LoadingContext";

export function useGetContacts() {
  const { startLoading, stopLoading } = useLoading();

  const user = useUserStore((state) => state.user);

  const setContacts = useContactStore((state) => state.setContacts);

  async function handleGetContacts() {
    try {
      startLoading();
      const res = await getContacts();
      setContacts(res);
    } finally {
      stopLoading();
    }
  }

  useEffect(() => {
    if (user.id > 0) {
      handleGetContacts();
    }
  }, [user]);

  return handleGetContacts;
}
