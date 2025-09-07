import LogoIcon from "@/shared/components/icons/LogoIcon";
import { Dispatch, SetStateAction } from "react";

interface ContactFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  classHeadlineParent: string;
  classLogo: string;
  headline: string;
  subtitle?: string;
}

export default function ContactForm({
  classHeadlineParent,
  classLogo,
  setOpen,
  headline,
  subtitle,
}: ContactFormProps) {
  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-fit h-[592px] flex rounded-[30px] overflow-hidden animate-slideInRight"
      >
        <div className="w-fit h-full flex flex-col justify-center gap-[12px] py-[66px] px-[48px] bg-[#2A3647]">
          <div
            className={`${classHeadlineParent} flex flex-col justify-between relative`}
          >
            <LogoIcon className={`${classLogo} absolute left-0 w-[56px] h-[66px] text-white`} />
            <span className="text-[61px] text-white font-[700] leading-[120%]">
              {headline}
            </span>
            {subtitle && (
              <span className="text-[27px] text-white leading-[120%]">
                {subtitle}
              </span>
            )}
            <div className="w-[90px] h-[3px] bg-[#29ABE2] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
