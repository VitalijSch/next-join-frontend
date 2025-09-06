import getToken from "@/shared/utils/getToken";
import { useEffect } from "react";
import { useContactStore } from "../stores/useContactStore";
import { getContacts } from "../api/getContacts";

export function useGetContacts() {
  const token = getToken();
  const setContacts = useContactStore((state) => state.setContacts);

  useEffect(() => {
    async function handleGetContacts() {
      if (token) {
        const contacts = await getContacts(token);
        setContacts(contacts);
      }
    }
    handleGetContacts();
  }, [token, setContacts]);
}
