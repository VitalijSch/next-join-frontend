import { Dispatch, SetStateAction } from "react";
import FormButtonsEdit from "./FormButtonsEdit";
import FormButtonsAdd from "./FormButtonsAdd";

interface FormButtonsProps {
  subtitle?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FormButtons({
  subtitle,
  setOpen,
}: FormButtonsProps) {
  return (
    <div className="flex items-center gap-[24px]">
      {!subtitle ? (
        <FormButtonsEdit setOpen={setOpen} />
      ) : (
        <FormButtonsAdd setOpen={setOpen} />
      )}
    </div>
  );
}
