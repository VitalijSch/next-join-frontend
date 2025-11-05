import { DropdownInput } from "@/shared/components/dropdowns/DropdownInput";
import RightCategoryDropdown from "./RightCategoryDropdown";
import { useFormContext } from "react-hook-form";
import { TaskSchema } from "../../schemas/taskSchema";

export default function RightCategory() {
  const { formState: {errors} ,watch, setValue } = useFormContext<TaskSchema>();
  const category = watch("category");

  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[20px] text-[#2A3647]">
        Category<span className="text-[20px] text-[#FF8190]">*</span>
      </span>
      <DropdownInput
        value={category}
        dropdown={<RightCategoryDropdown setValue={setValue} />}
      />
      {typeof errors.category?.message === "string" && <p className="h-[14px] text-[12px] text-[#FF8190]">{errors.category.message}</p>}
    </div>
  );
}
