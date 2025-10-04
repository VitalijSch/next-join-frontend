import { FieldErrors } from "react-hook-form";
import NameIcon from "@/shared/components/icons/NameIcon";
import EmailIcon from "@/shared/components/icons/EmailIcon";
import { PhoneIcon } from "@/shared/components/icons/PhoneIcon";

export function useContactFields(
  setExistEmailMessage: (msg: string | null) => void,
  existEmailMessage: string | null,
  errors: FieldErrors<{
    name: string;
    email: string;
    phone: string;
  }>
) {
  return [
    {
      name: "name",
      placeholder: "Name",
      type: "text",
      Icon: NameIcon,
      error: errors.name?.message,
    },
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      Icon: EmailIcon,
      error: existEmailMessage || errors.email?.message,
      onChange: () => setExistEmailMessage(null),
    },
    {
      name: "phone",
      placeholder: "Phone",
      type: "text",
      Icon: PhoneIcon,
      error: errors.phone?.message,
    },
  ] as const;
}
