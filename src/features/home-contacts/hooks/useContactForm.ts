import { Dispatch, SetStateAction, useEffect } from "react";
import { useLoading } from "@/shared/contexts/LoadingContext";
import { ContactSchema } from "../schemas/contactSchema";
import { createContact } from "../api/createContact";
import { colors } from "../data/colors";
import { useGetContacts } from "./useGetContacts";
import { useContactStore } from "../stores/useContactStore";

export function useContactForm(
  reset: () => void,
  setOpen: Dispatch<SetStateAction<boolean>>
) {
  const { startLoading, stopLoading } = useLoading();

  const contacts = useContactStore((state) => state.contacts);

  const setScrollToContact = useContactStore(
    (state) => state.setScrollToContact
  );

  const setSelectedContact = useContactStore(
    (state) => state.setSelectedContact
  );

  const setShowToastMessage = useContactStore(
    (state) => state.setShowToastMessage
  );

  const handleGetContacts = useGetContacts();

  async function handleCreateContact(data: ContactSchema) {
    await processUserSignup(data);
  }

  async function processUserSignup(userData: ContactSchema) {
    startLoading();
    const contactWithColor = {
      ...userData,
      icon_color: getRandomColor(),
    };
    await createContact(contactWithColor);
    await handleGetContacts();
    stopLoading();
    reset();
    setOpen(false);
    setScrollToContact(true);
    handleToastMessage();
  }

  function handleToastMessage() {
    setShowToastMessage(true);
    setTimeout(() => {
      setShowToastMessage(false);
    }, 2000);
  }

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  useEffect(() => {
    if (contacts.length > 0) {
      setSelectedContact(contacts[contacts.length - 1]);
    }
  }, [contacts]);

  return {
    handleCreateContact,
  };
}
