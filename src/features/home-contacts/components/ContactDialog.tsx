import CloseButton from "@/shared/components/buttons/CloseButton";
import { Dispatch, SetStateAction } from "react";
import ContactDialogForm from "./ContactDialogForm";
import ContactDialogHeader from "./ContactDialogHeader";
import ContactDialogAvatar from "./ContactDialogAvatar";

interface ContactDialogProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  classHeadlineParent: string;
  classLogo: string;
  headline: string;
  subtitle?: string;
}

export default function ContactDialog({
  classHeadlineParent,
  classLogo,
  setOpen,
  headline,
  subtitle,
}: ContactDialogProps) {
  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[1212px] w-full h-[592px] flex rounded-[30px] overflow-hidden animate-slideInRight"
      >
        <ContactDialogHeader
          classHeadlineParent={classHeadlineParent}
          classLogo={classLogo}
          headline={headline}
          subtitle={subtitle}
        />
        <div className="flex-1 h-full flex flex-col items-end gap-[57px] pt-[48px] pr-[48px] bg-white">
          <CloseButton handleOnClick={() => setOpen(false)} />
          <ContactDialogForm subtitle={subtitle} setOpen={setOpen} />
          <ContactDialogAvatar subtitle={subtitle} />
        </div>
      </div>
    </div>
  );
}
