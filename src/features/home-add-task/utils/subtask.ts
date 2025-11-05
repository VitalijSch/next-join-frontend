import { Dispatch, SetStateAction } from "react";
import { UseFormSetValue } from "react-hook-form";
import { TaskSchema } from "../schemas/taskSchema";

export function addInputValueToSubtasks(
  setValue: UseFormSetValue<TaskSchema>,
  subtasks: string[],
  newValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>
) {
  setValue("subtasks", [...subtasks, newValue]);
  resetInputField(setInputValue);
}

export function resetInputField(
  setInputValue: Dispatch<SetStateAction<string>>
) {
  setInputValue("");
}

export function deleteSubtask(
  subtasks: string[],
  index: number,
  setValue: UseFormSetValue<TaskSchema>,
  setTaskIndex: Dispatch<SetStateAction<number | null>>
) {
  const newSubtasks = subtasks.filter((_, i) => i !== index);
  setValue("subtasks", newSubtasks);
  setTaskIndex(null);
}

export function updateSubtask(
  subtasks: string[],
  index: number,
  updateValue: string,
  setValue: UseFormSetValue<TaskSchema>,
  setTaskIndex: Dispatch<SetStateAction<number | null>>
) {
  setTaskIndex(null);
  if(updateValue === "") return;
  const newSubtasks = subtasks.map((task, i) =>
    i === index ? updateValue : task
  );
  setValue("subtasks", newSubtasks);
}
