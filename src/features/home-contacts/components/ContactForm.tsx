import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import BorderButton from "@/shared/components/buttons/BorderButton";
import CloseButton from "@/shared/components/buttons/CloseButton";
import CheckIcon from "@/shared/components/icons/CheckIcon";
import CloseIcon from "@/shared/components/icons/CloseIcon";
import LogoIcon from "@/shared/components/icons/LogoIcon";
import { Dispatch, SetStateAction } from "react";
import { useContactFields } from "../hooks/useContactFields";
import InputField from "@/shared/components/auth/InputField";
import { contactSchema, ContactSchema } from "../schemas/contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NameIcon from "@/shared/components/icons/NameIcon";
import { useContactStore } from "../stores/useContactStore";
import { getAbbreviation } from "../utils/getAbbreviation";
import { useDeleteContact } from "../hooks/useDeleteContact";
import { useCreateContact } from "../hooks/useCreateContact";
import { useUpdateContact } from "../hooks/useUpdateContact";

interface ContactFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  classHeadlineParent: string;
  classLogo: string;
  headline: string;
  subtitle?: string;
}

export default function ContactForm({
  classHeadlineParent,
  classLogo,
  setOpen,
  headline,
  subtitle,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const selectedContact = useContactStore((state) => state.selectedContact);

  const handleCreateContact = useCreateContact(reset, setOpen);

  const handleUpdateContact = useUpdateContact(reset, setOpen);

  const inputFields = useContactFields(errors);

  const handleDeleteContact = useDeleteContact();

  function getDefaultValue(value: string) {
    if (!selectedContact) return undefined;
    if (value === "name") return selectedContact.name;
    if (value === "email") return selectedContact.email;
    return selectedContact.phone;
  }

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[1212px] w-full h-[592px] flex rounded-[30px] overflow-hidden animate-slideInRight"
      >
        <div className="w-[467px] h-full flex flex-col justify-center gap-[12px] py-[66px] px-[48px] bg-[#2A3647]">
          <div
            className={`${classHeadlineParent} flex flex-col justify-between relative`}
          >
            <LogoIcon
              className={`${classLogo} absolute left-0 w-[56px] h-[66px] text-white`}
            />
            <span className="text-[61px] text-white font-[700] leading-[120%]">
              {headline}
            </span>
            {subtitle && (
              <span className="text-[27px] text-white leading-[120%]">
                {subtitle}
              </span>
            )}
            <div className="w-[90px] h-[3px] bg-[#29ABE2] rounded-full" />
          </div>
        </div>
        <div className="flex-1 h-full flex flex-col items-end gap-[57px] pt-[48px] pr-[48px] bg-white">
          <CloseButton handleOnClick={() => setOpen(false)} />
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
                defaulValue={
                  !subtitle ? getDefaultValue(field.name) : undefined
                }
              />
            ))}
            <div className="flex items-center gap-[24px]">
              {!subtitle ? (
                <>
                  <BorderButton
                    classButton="w-[113px] h-[55px]"
                    classSpan="text-[21px]"
                    name="Delete"
                    handleOnClick={() => {
                      handleDeleteContact();
                      setOpen(false);
                    }}
                  />
                  <BackgroundButton
                    type="submit"
                    classButton="w-[111px] h-[57px] gap-[4px]"
                    classSpan="text-[21px]"
                    name="Save"
                    Icon={CheckIcon}
                  />
                </>
              ) : (
                <>
                  <BorderButton
                    classButton="w-[126px] h-[56px]"
                    classSpan="text-[20px]"
                    name="Cancel"
                    handleOnClick={() => setOpen(false)}
                    Icon={CloseIcon}
                  />
                  <BackgroundButton
                    type="submit"
                    classButton="w-[214px] h-[57px] gap-[4px]"
                    classSpan="text-[21px]"
                    name="Create contact"
                    Icon={CheckIcon}
                  />
                </>
              )}
            </div>
          </form>
          <div
            style={{
              backgroundColor: !subtitle
                ? selectedContact?.icon_color
                : "#D1D1D1",
            }}
            className="absolute top-[204px] left-[550px] w-[120px] h-[120px] flex justify-center items-center border-3 border-white rounded-full shadow-[0px_0px_4px_0px_#0000001A]"
          >
            {!subtitle && selectedContact ? (
              <span className="text-[47px] text-white font-[500]">
                {getAbbreviation(selectedContact.name)}
              </span>
            ) : (
              <NameIcon className="w-[64px] h-[64px] text-white" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
