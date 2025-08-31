interface BackgroundButtonProps {
  handleOnClick?: () => void;
  type?: "submit" | "button";
  classButton: string;
  classSpan: string;
  name: string;
  Icon?: React.ElementType;
}

export default function BackgroundButton({
  type = "button",
  classButton,
  classSpan,
  name,
  handleOnClick,
  Icon,
}: BackgroundButtonProps) {
  return (
    <button
      onClick={handleOnClick}
      type={type}
      className={`${classButton} flex justify-center items-center bg-[#2A3647] rounded-[8px] cursor-pointer hover:bg-[#29ABE2] hover:shadow-[0px_4px_4px_0px_#00000040] transition-colors duration-300 ease-in-out`}
    >
      <span className={`${classSpan} text-white font-[700]`}>{name}</span>
      {Icon && <Icon />}
    </button>
  );
}
