import { useForm } from "react-hook-form";
import { contactSchema, ContactSchema } from "../schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContactStore } from "../stores/useContactStore";
import { useContactFields } from "../hooks/useContactFields";
import { useCreateContact } from "../hooks/useCreateContact";
import { useUpdateContact } from "../hooks/useUpdateContact";
import InputField from "@/shared/components/auth/InputField";
import { Dispatch, SetStateAction } from "react";
import FormButtons from "./contact-dialog-form/FormButtons";

interface ContactDialogFormProps {
  subtitle?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ContactDialogForm({
  subtitle,
  setOpen,
}: ContactDialogFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const selectedContact = useContactStore((state) => state.selectedContact);

  const inputFields = useContactFields(errors);

  const handleCreateContact = useCreateContact(reset, setOpen);

  const handleUpdateContact = useUpdateContact(reset, setOpen);

  return (
    <form
      onSubmit={handleSubmit(
        !subtitle ? handleUpdateContact : handleCreateContact
      )}
      className="max-w-[422px] w-full flex flex-col gap-[32px]"
    >
      {inputFields.map((field) => (
        <InputField
          key={field.name}
          className="h-[50px]"
          placeholder={field.placeholder}
          type={field.type}
          name={field.name}
          Icon={field.Icon}
          register={register}
          error={field.error}
          defaultValue={!subtitle ? selectedContact?.[field.name] : undefined}
        />
      ))}
      <FormButtons subtitle={subtitle} setOpen={setOpen} />
    </form>
  );
}
