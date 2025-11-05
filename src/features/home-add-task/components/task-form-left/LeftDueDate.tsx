import InputField from "@/shared/components/auth/InputField";
import CalendarIcon from "@/shared/components/icons/CalendarIcon";
import { useFormContext } from "react-hook-form";

export default function LeftDueDate() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[20px] text-[#2A3647]">
        Due Date<span className="text-[20px] text-[#FF8190]">*</span>
      </span>
      <InputField
        className="h-[48px] w-full"
        placeholder="dd/mm/yyyy"
        type="text"
        name="due_date"
        Icon={CalendarIcon}
        register={register}
        error={
          typeof errors.due_date?.message === "string"
            ? errors.due_date?.message
            : undefined
        }
      />
    </div>
  );
}
