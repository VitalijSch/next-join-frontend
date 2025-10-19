import { Contact } from "@/features/home-contacts/interfaces/contact";
import { useContactStore } from "@/features/home-contacts/stores/useContactStore";
import { useEffect, useState } from "react";
import { useFormTask } from "./useFormTask";

export function useFilteredContacts() {
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const contacts = useContactStore((state) => state.contacts);

  const { watch, setValue } = useFormTask();

  const assignedTo = watch("assigned_to");

  function isSelected(id: number) {
    return assignedTo.some((contact) => contact.id === id);
  }

  function handleSelectedContact(contact: Contact) {
    const alreadySelected = assignedTo.some((c) => c.id === contact.id);
    setValue(
      "assigned_to",
      alreadySelected
        ? assignedTo.filter((c) => c.id !== contact.id)
        : [...assignedTo, contact]
    );
  }

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

  return {
    search,
    setSearch,
    filteredContacts,
    isSelected,
    handleSelectedContact,
  };
}
