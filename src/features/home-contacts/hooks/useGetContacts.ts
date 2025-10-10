import { useEffect } from "react";
import { useContactStore } from "../stores/useContactStore";
import { useUserStore } from "@/shared/stores/useUserStore";
import { getContacts } from "../api/getContacts";

export function useGetContacts() {
  const user = useUserStore((state) => state.user);

  const setContacts = useContactStore((state) => state.setContacts);

  async function handleGetContacts() {
    const contacts = await getContacts();
    if (Array.isArray(contacts)) {
      setContacts(contacts);
    } else {
      setContacts([]);
    }
  }

  useEffect(() => {
    if (user.id > 0) {
      handleGetContacts();
    }
  }, [user]);

  return handleGetContacts;
}
