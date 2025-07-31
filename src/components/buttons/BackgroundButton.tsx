interface BackgroundButtonProps {
  type?: "submit" | "button";
  className: string;
  fontSize: string;
  name: string;
  handleOnClick: () => void;
}

export default function BackgroundButton({
  type = "button",
  className,
  fontSize,
  name,
  handleOnClick,
}: BackgroundButtonProps) {
  return (
    <button
      onClick={handleOnClick}
      type={type}
      className={`${className} flex justify-center items-center bg-[#2A3647] rounded-[8px] cursor-pointer hover:bg-[#29ABE2] hover:shadow-[0px_4px_4px_0px_#00000040] transition-colors duration-300 ease-in-out`}
    >
      <span className={`${fontSize} text-white font-[700]`}>{name}</span>
    </button>
  );
}
