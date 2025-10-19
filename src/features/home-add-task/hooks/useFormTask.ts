import { useForm } from "react-hook-form";
import { taskSchema, TaskSchema } from "../schemas/taskSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useFormTask() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<TaskSchema>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      priority: "Medium",
      assigned_to: [],
      category: "Select task category",
    },
  });

  return {
    register,
    handleSubmit,
    reset,
    errors,
    watch,
    setValue,
  };
}
