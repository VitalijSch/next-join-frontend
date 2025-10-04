import CloseIcon from "../icons/CloseIcon";

interface CloseButtonProps {
  handleOnClick: () => void;
}

export default function CloseButton({ handleOnClick }: CloseButtonProps) {
  return (
    <div
      onClick={handleOnClick}
      className="w-[32px] h-[32px] flex justify-center items-center rounded-[56px] cursor-pointer hover:bg-[#EEEEEE] transition-colors duration-300 ease-in-out"
    >
      <CloseIcon />
    </div>
  );
}
