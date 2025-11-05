import { Dispatch, SetStateAction, useState } from "react";
import { deleteSubtask, updateSubtask } from "../../utils/subtask";
import { UseFormSetValue } from "react-hook-form";
import { TaskSchema } from "../../schemas/taskSchema";
import HandleButton from "@/shared/components/buttons/HandleButton";
import DeleteIcon from "@/shared/components/icons/DeleteIcon";
import CheckIcon from "@/shared/components/icons/CheckIcon";

interface RightSubtasksUpdateProps {
  subtasks: string[];
  index: number;
  setValue: UseFormSetValue<TaskSchema>;
  setTaskIndex: Dispatch<SetStateAction<number | null>>;
}

export default function RightSubtasksUpdate({
  subtasks,
  index,
  setValue,
  setTaskIndex,
}: RightSubtasksUpdateProps) {
  const [updateValue, setUpdateValue] = useState(subtasks[index]);

  return (
    <div className="relative w-full">
      <input
        value={updateValue}
        onChange={(e) => setUpdateValue(e.target.value)}
        className="w-full py-[4px] px-[16px] my-[6px] bg-white border-b border-b-[#29ABE2] outline-none"
        type="text"
        name={`subtask${index}`}
        id={`subtask${index}`}
      />
      <div className="absolute top-1/2 right-[21px] -translate-y-1/2 flex items-center gap-[4px]">
        <HandleButton
          handleOnClick={() =>
            deleteSubtask(subtasks, index, setValue, setTaskIndex)
          }
          Icon={<DeleteIcon />}
        />
        <div className="w-[1px] h-[24px] bg-[#D1D1D1]" />
        <HandleButton
          handleOnClick={() =>
            updateSubtask(subtasks, index, updateValue, setValue, setTaskIndex)
          }
          Icon={<CheckIcon className="text-[#2A3647]" />}
        />
      </div>
    </div>
  );
}
