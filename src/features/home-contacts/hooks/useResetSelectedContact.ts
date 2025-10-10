import { useEffect } from "react";
import { useContactStore } from "../stores/useContactStore";

export function useResetSelectedContact() {
  const selectedContact = useContactStore((state) => state.setSelectedContact);

  useEffect(() => {
    selectedContact(null);
  }, [selectedContact]);
}
