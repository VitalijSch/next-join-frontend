"use client";

import { useFormTask } from "../hooks/useFormTask";
import TaskFormButtons from "./TaskFormButtons";
import TaskFormLeft from "./TaskFormLeft";
import TaskFormRight from "./TaskFormRight";

export default function TaskForm() {
  const { handleSubmit } = useFormTask();

  function handleAddTask() {
    return;
  }

  return (
    <form onSubmit={handleSubmit(handleAddTask)} className="flex gap-[48px]">
      <TaskFormLeft />
      <div className="w-[1px] h-[424px] bg-[#D1D1D1] rounded-full" />
      <TaskFormRight />
      <TaskFormButtons />
    </form>
  );
}
