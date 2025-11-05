import HandleButton from "@/shared/components/buttons/HandleButton";
import { deleteSubtask } from "../../utils/subtask";
import { UseFormSetValue } from "react-hook-form";
import { TaskSchema } from "../../schemas/taskSchema";
import { Dispatch, SetStateAction } from "react";
import EditIcon from "@/shared/components/icons/EditIcon";
import DeleteIcon from "@/shared/components/icons/DeleteIcon";

interface RightSubtasksListProps {
  subtasks: string[];
  task: string;
  index: number;
  setValue: UseFormSetValue<TaskSchema>;
  setTaskIndex: Dispatch<SetStateAction<number | null>>;
}

export default function RightSubtasksList({
  subtasks,
  task,
  index,
  setValue,
  setTaskIndex,
}: RightSubtasksListProps) {
  return (
    <li
      onClick={() => setTaskIndex(index)}
      className="group relative py-[6px] px-[16px] rounded-[10px] hover:bg-[#EEEEEE] list-disc list-inside cursor-pointer transition-colors duration-300 ease-in-out"
    >
      <span>{task}</span>
      <div className="absolute top-1/2 right-[21px] -translate-y-1/2 flex items-center gap-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <HandleButton
          handleOnClick={() => setTaskIndex(index)}
          Icon={<EditIcon />}
        />
        <div className="w-[1px] h-[24px] bg-[#D1D1D1]" />
        <HandleButton
          handleOnClick={() =>
            deleteSubtask(subtasks, index, setValue, setTaskIndex)
          }
          Icon={<DeleteIcon />}
        />
      </div>
    </li>
  );
}
