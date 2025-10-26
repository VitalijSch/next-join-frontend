import { DropdownInput } from "@/shared/components/dropdowns/DropdownInput";
import { useFormTask } from "../../hooks/useFormTask";
import RightCategoryDropdown from "./RightCategoryDropdown";

export default function RightCategory() {
  const { watch, setValue } = useFormTask();
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
    </div>
  );
}
