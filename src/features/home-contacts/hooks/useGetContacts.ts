import { useEffect } from "react";
import { useContactStore } from "../stores/useContactStore";
import { useUserStore } from "@/shared/stores/useUserStore";
import { getContacts } from "../api/getContacts";

export function useGetContacts() {
  const setContacts = useContactStore((state) => state.setContacts);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user.id > 0) {
      async function handleGetContacts() {
        const contacts = await getContacts();
        if (Array.isArray(contacts)) {
          setContacts(contacts);
        } else {
          setContacts([]);
        }
      }
      handleGetContacts();
    }
  }, [setContacts, user.id]);
}
