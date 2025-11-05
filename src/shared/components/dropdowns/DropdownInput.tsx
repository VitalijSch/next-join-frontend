import { ChangeEvent, ReactElement, useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";

interface DropdownInputProps {
  value: string;
  setValue?: (value: string) => void;
  dropdown: ReactElement;
}

export function DropdownInput({
  value,
  setValue,
  dropdown,
}: DropdownInputProps) {
  const [open, setOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (!setValue) return;
    setValue(e.target.value);
  }

  useEffect(() => {
    if (!setValue) return;
    if (open && inputRef.current) {
      inputRef.current.focus();
      if (value === "Select contacts to assign") setValue("");
    } else {
      setValue("Select contacts to assign");
    }
  }, [inputRef, open, setValue, value]);

  useEffect(() => {
    if (!setValue) setOpen(false);
  }, [value]);

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            zIndex: setValue ? "9998" : "9996",
          }}
          className="fixed inset-0"
        />
      )}
      <div
        style={{
          zIndex: setValue ? "9999" : "9997",
        }}
        className="relative"
      >
        <input
          ref={inputRef}
          onClick={() => setOpen(true)}
          className="peer w-full h-full py-[12px] px-[21px] bg-white border border-[#D1D1D1] hover:border-[grey] focus:border-[#29ABE2] rounded-[10px] outline-none relative z-10 cursor-pointer text-[20px] placeholder:text-[#D1D1D1] transition-colors duration-300 ease-in-out"
          type="text"
          value={value}
          onChange={(e) => handleOnChange(e)}
          readOnly={!setValue}
        />
        <div
          onClick={() => setOpen(!open)}
          className="absolute top-1/2 right-[16px] z-20 -translate-y-1/2 w-[24px] h-[24px] flex justify-center items-center rounded-[72px] cursor-pointer hover:bg-[#EEEEEE] transition-colors duration-300 ease-in-out"
        >
          {!open && <ArrowDownIcon />}
          {open && <ArrowUpIcon />}
        </div>
        {open && dropdown}
      </div>
    </>
  );
}
