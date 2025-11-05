import InputField from "@/shared/components/auth/InputField";
import { useFormContext } from "react-hook-form";

export default function LeftTitle() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[20px] text-[#2A3647]">
        Title<span className="text-[20px] text-[#FF8190]">*</span>
      </span>
      <InputField
        className="h-[48px] w-full"
        placeholder="Enter a title"
        type="text"
        name="title"
        register={register}
        error={
          typeof errors.title?.message === "string"
            ? errors.title?.message
            : undefined
        }
      />
    </div>
  );
}
