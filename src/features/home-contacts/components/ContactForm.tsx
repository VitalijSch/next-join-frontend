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
import { useContactForm } from "../hooks/useContactForm";

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

  const { handleCreateContact, existEmailMessage, setExistEmailMessage } =
    useContactForm(reset, setOpen);

  const inputFields = useContactFields(
    setExistEmailMessage,
    existEmailMessage,
    errors
  );

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[1212px] w-full h-[592px] flex rounded-[30px] overflow-hidden animate-slideInRight"
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
            onSubmit={handleSubmit(handleCreateContact)}
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
              />
            ))}
            <div className="flex items-center gap-[24px]">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
