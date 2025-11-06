"use client";

import { FormProvider } from "react-hook-form";
import { useFormTask } from "../hooks/useFormTask";
import TaskFormButtons from "./TaskFormButtons";
import TaskFormLeft from "./TaskFormLeft";
import TaskFormRight from "./TaskFormRight";
import { TaskSchema } from "../schemas/taskSchema";
import { useLoading } from "@/shared/contexts/LoadingContext";
import { createTask } from "../api/createTask";
import ToastMessage from "@/shared/components/toasts/ToastMessage";
import BoardIcon from "@/shared/components/icons/BoardIcon";
import { useToast } from "@/shared/hooks/useToast";
import { useToastMessageStore } from "@/shared/stores/useToastMessageStore";

export default function TaskForm() {
  const { startLoading, stopLoading } = useLoading();

  const methods = useFormTask();
  const { handleSubmit, reset } = methods;

  const showSuccessToast = useToast();

  const showToastMessage = useToastMessageStore(
    (state) => state.showToastMessage
  );

  async function handleAddTask(data: TaskSchema) {
    const payload = {
      ...data,
      assigned_to: data.assigned_to.map((contact) => contact.id),
    };
    startLoading();
    await createTask(payload);
    reset();
    stopLoading();
    showSuccessToast(2000, "/board");
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleAddTask)} className="flex gap-[48px]">
        <TaskFormLeft />
        <div className="w-[1px] h-[424px] bg-[#D1D1D1] rounded-full" />
        <TaskFormRight />
        <TaskFormButtons />
      </form>
      {showToastMessage && (
        <ToastMessage
          message="Task added to board"
          className="w-[326px] animate-bottomCenter"
          Icon={BoardIcon}
        />
      )}
    </FormProvider>
  );
}
