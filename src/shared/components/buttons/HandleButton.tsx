interface HandleButtonProps {
  handleOnClick: () => void;
  Icon: React.ReactNode;
}

export default function HandleButton({
  handleOnClick,
  Icon,
}: HandleButtonProps) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleOnClick();
      }}
      className="w-[32px] h-[32px] flex justify-center items-center rounded-[56px] cursor-pointer hover:bg-[#EEEEEE] transition-colors duration-300 ease-in-out"
    >
      {Icon}
    </div>
  );
}
