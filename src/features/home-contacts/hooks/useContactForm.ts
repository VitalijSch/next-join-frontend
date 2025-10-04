import { Dispatch, SetStateAction, useState } from "react";
import { useLoading } from "@/shared/contexts/LoadingContext";
import { ContactSchema } from "../schemas/contactSchema";
import { createContact } from "../api/createContact";
import { colors } from "../data/colors";

export function useContactForm(
  reset: () => void,
  setOpen: Dispatch<SetStateAction<boolean>>
) {
  const [existEmailMessage, setExistEmailMessage] = useState<string | null>(
    null
  );

  const { startLoading, stopLoading } = useLoading();

  async function handleCreateContact(data: ContactSchema) {
    clearPreviousErrors();
    await processUserSignup(data);
  }

  function clearPreviousErrors() {
    setExistEmailMessage(null);
  }

  async function processUserSignup(userData: ContactSchema) {
    startLoading();
    const contactWithColor = {
      ...userData,
      icon_color: getRandomColor(),
    };
    const response = await createContact(contactWithColor);
    stopLoading();

    if (
      response &&
      typeof response === "object" &&
      "detail" in response &&
      response.detail === "custom user with this email already exists."
    ) {
      showEmailExistsError(response.detail);
      return;
    }
    reset();
    setOpen(false);
  }

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function showEmailExistsError(error: string) {
    setExistEmailMessage(error);
  }

  return {
    handleCreateContact,
    existEmailMessage,
    setExistEmailMessage,
  };
}
