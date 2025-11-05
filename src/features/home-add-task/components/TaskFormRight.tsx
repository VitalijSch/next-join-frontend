import RightPriority from "./task-form-right/RightPriority";
import RightAssigned from "./task-form-right/RightAssigned";
import RightCategory from "./task-form-right/RightCategory";
import RightSubtasks from "./task-form-right/RightSubtasks";

export default function TaskFormRight() {
  return (
    <div className="w-[440px] flex flex-col gap-[10px]">
      <RightPriority />
      <RightAssigned />
      <RightCategory />
      <RightSubtasks />
    </div>
  );
}
