"use client";

import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import BorderButton from "@/shared/components/buttons/BorderButton";
import CheckIcon from "@/shared/components/icons/CheckIcon";
import CloseIcon from "@/shared/components/icons/CloseIcon";
import { useFormTask } from "../hooks/useFormTask";

export default function TaskFormButtons() {
  const { reset } = useFormTask();

  return (
    <div className="absolute right-[96px] bottom-[79px]">
      <div className="flex gap-[16px]">
        <BorderButton
          classButton="w-[110px] h-[56px]"
          classSpan="text-[20px]"
          name="Clear"
          handleOnClick={() => reset()}
          Icon={CloseIcon}
        />
        <BackgroundButton
          type="submit"
          classButton="w-[183px] h-[56px] gap-[4px]"
          classSpan="text-[21px]"
          name="Create Task"
          Icon={CheckIcon}
        />
      </div>
    </div>
  );
}
