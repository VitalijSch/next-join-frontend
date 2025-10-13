import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import BorderButton from "@/shared/components/buttons/BorderButton";
import { useDeleteContact } from "../../hooks/useDeleteContact";
import { Dispatch, SetStateAction } from "react";
import CheckIcon from "@/shared/components/icons/CheckIcon";

interface FormButtonsEditProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FormButtonsEdit({ setOpen }: FormButtonsEditProps) {
  const handleDeleteContact = useDeleteContact();

  return (
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
  );
}
