import LeftTitle from "./task-form-left/LeftTitle";
import LeftDescription from "./task-form-left/LeftDescription";
import LeftDueDate from "./task-form-left/LeftDueDate";

export default function TaskFormLeft() {
  return (
    <div className="w-[440px] flex flex-col gap-[10px]">
      <LeftTitle />
      <LeftDescription />
      <LeftDueDate />
    </div>
  );
}
