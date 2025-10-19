import RightPriority from "./task-form-right/RightPriority";
import RightAssigned from "./task-form-right/RightAssigned";

export default function TaskFormRight() {
  return (
    <div className="w-[440px] flex flex-col gap-[10px]">
      <RightPriority />
      <RightAssigned />
    </div>
  );
}
