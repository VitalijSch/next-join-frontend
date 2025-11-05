import { Contact } from "@/features/home-contacts/interfaces/contact";
import { useContactStore } from "@/features/home-contacts/stores/useContactStore";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useFilteredContacts(
  search: string,
  setFilteredContacts: Dispatch<SetStateAction<Contact[]>>,
) {
  const contacts = useContactStore((state) => state.contacts);

  useEffect(() => {
    function handleFilteredContacts() {
      if (!search.trim()) {
        setFilteredContacts(contacts);
      }
      if (search.length > 0) {
        const newContactList = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredContacts(newContactList);
      }
    }
    
    handleFilteredContacts();
  }, [contacts, search]);
}
