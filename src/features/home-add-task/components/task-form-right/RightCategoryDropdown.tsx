import { UseFormSetValue } from "react-hook-form";
import { TaskSchema } from "../../schemas/taskSchema";

interface RightCategoryDropdownProps {
  setValue: UseFormSetValue<TaskSchema>;
}

export default function RightCategoryDropdown({
  setValue,
}: RightCategoryDropdownProps) {
  const categories: ["Technical Task", "User Story"] = [
    "Technical Task",
    "User Story",
  ];

  return (
    <div className="absolute top-[40px] w-full max-h-[296px] h-fit flex flex-col gap-[2px] pt-[8px] bg-white rounded-b-[10px] overflow-auto">
      {categories.map((categorie, index) => (
        <div
          key={index}
          onClick={() => setValue("category", categorie)}
          className="w-full min-h-[56px] flex justify-between items-center px-[16px] rounded-[10px] cursor-pointer hover:bg-[#EEEEEE] transition-colors duration-300 ease-in-out"
        >
          <span className="text-[20px]">{categorie}</span>
        </div>
      ))}
    </div>
  );
}
