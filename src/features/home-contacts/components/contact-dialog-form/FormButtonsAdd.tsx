import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import BorderButton from "@/shared/components/buttons/BorderButton";
import { Dispatch, SetStateAction } from "react";
import CheckIcon from "@/shared/components/icons/CheckIcon";
import CloseIcon from "@/shared/components/icons/CloseIcon";

interface FormButtonsAddProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FormButtonsAdd({ setOpen }: FormButtonsAddProps) {
  return (
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
  );
}
