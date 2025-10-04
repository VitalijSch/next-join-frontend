interface BackgroundButtonProps {
  type?: "submit" | "button";
  classButton: string;
  classSpan: string;
  name: string;
  handleOnClick: () => void;
  Icon?: React.ElementType;
}

export default function BorderButton({
  type = "button",
  classButton,
  classSpan,
  name,
  handleOnClick,
  Icon
}: BackgroundButtonProps) {
  return (
    <button
      onClick={handleOnClick}
      type={type}
      className={`${classButton} group flex justify-center items-center bg-white border border-[#2A3647] rounded-[8px] cursor-pointer hover:border-2 hover:border-[#29ABE2] hover:shadow-[0px_4px_4px_0px_#00000040] transition-all duration-300 ease-in-out`}
    >
      <span
        className={`${classSpan} text-[#2A3647] group-hover:text-[#29ABE2] transition-colors duration-300 ease-in-out`}
      >
        {name}
      </span>
      {Icon && <Icon />}
    </button>
  );
}
