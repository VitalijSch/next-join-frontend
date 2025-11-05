import { Dispatch, SetStateAction } from "react";
import { useLoading } from "@/shared/contexts/LoadingContext";
import { ContactSchema } from "../schemas/contactSchema";
import { createContact } from "../api/createContact";
import { colors } from "../data/colors";
import { useContactStore } from "../stores/useContactStore";
import { Contact } from "../interfaces/contact";
import { useToast } from "@/shared/hooks/useToast";

export function useCreateContact(
  reset: () => void,
  setOpen: Dispatch<SetStateAction<boolean>>
) {
  const { startLoading, stopLoading } = useLoading();

  const setScrollToContact = useContactStore(
    (state) => state.setScrollToContact
  );

  const contacts = useContactStore((state) => state.contacts);
  const setContacts = useContactStore((state) => state.setContacts);

  const setSelectedContact = useContactStore(
    (state) => state.setSelectedContact
  );

  const showSuccessToast = useToast();

  async function handleCreateContact(userData: ContactSchema) {
    const newContact = buildNewContact(userData);
    startLoading();
    await createContact(newContact);
    updateContactState(newContact);
    resetFormAndCloseModal();
    showSuccessToast(2000);
    stopLoading();
  }

  function buildNewContact(userData: ContactSchema): Contact {
    return {
      ...userData,
      id: contacts[contacts.length - 1]?.id + 1 || 1,
      icon_color: getRandomColor(),
    };
  }

  function updateContactState(newContact: Contact) {
    setContacts([...contacts, newContact]);
    setSelectedContact(newContact);
    setScrollToContact(true);
  }

  function resetFormAndCloseModal() {
    reset();
    setOpen(false);
  }

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return handleCreateContact;
}
