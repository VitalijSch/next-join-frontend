import CheckIcon from "@/shared/components/icons/CheckIcon";
import HandleButton from "@/shared/components/buttons/HandleButton";
import CloseIcon from "@/shared/components/icons/CloseIcon";
import { useState } from "react";
import { addInputValueToSubtasks, resetInputField } from "../../utils/subtask";
import RightSubtasksUpdate from "./RightSubtasksUpdate";
import RightSubtasksList from "./RightSubtasksList";
import { useFormContext } from "react-hook-form";
import { TaskSchema } from "../../schemas/taskSchema";

export default function RightSubtasks() {
  const [newValue, setNewValue] = useState("");
  const [taskIndex, setTaskIndex] = useState<number | null>(null);

  const { setValue, watch } = useFormContext<TaskSchema>();
  const subtasks = watch("subtasks");

  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[20px] text-[#2A3647]">Subtasks</span>
      <div className="relative w-full h-fit">
        <input
          className="w-full h-[48px] py-[12px] px-[21px] bg-white border rounded-[10px] border-[#D1D1D1] outline-none cursor-pointer text-[20px] placeholder:text-[#D1D1D1] hover:border-[grey] focus:border-[#29ABE2] transition-colors duration-300 ease-in-out"
          placeholder="Add new subtask"
          type="text"
          name="subtasks"
          id="subtasks"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        {newValue !== "" && (
          <div className="absolute top-1/2 right-[21px] -translate-y-1/2 flex items-center gap-[4px]">
            <HandleButton
              handleOnClick={() => resetInputField(setNewValue)}
              Icon={<CloseIcon />}
            />
            <div className="w-[1px] h-[24px] bg-[#D1D1D1]" />
            <HandleButton
              handleOnClick={() =>
                addInputValueToSubtasks(
                  setValue,
                  subtasks,
                  newValue,
                  setNewValue
                )
              }
              Icon={<CheckIcon className="text-[#2A3647]" />}
            />
          </div>
        )}
      </div>
      {subtasks.length > 0 && (
        <ul className="max-h-[110px] w-full flex flex-col overflow-auto">
          {subtasks.map((task, index) => (
            <div key={index}>
              {taskIndex !== index && (
                <RightSubtasksList
                  subtasks={subtasks}
                  task={task}
                  index={index}
                  setValue={setValue}
                  setTaskIndex={setTaskIndex}
                />
              )}
              {taskIndex === index && (
                <RightSubtasksUpdate
                  subtasks={subtasks}
                  index={index}
                  setValue={setValue}
                  setTaskIndex={setTaskIndex}
                />
              )}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
