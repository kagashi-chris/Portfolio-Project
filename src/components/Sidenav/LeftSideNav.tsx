import { useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

export default function leftSideNav() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="text-fontDarkerWhite hidden lg:flex flex-col fixed bottom-0 z-10 left-[40px] items-center justify-center fade-enter">
      <div className="flex flex-col gap-[25px] text-[24px] mb-[20px]">
        <a
          href="https://www.linkedin.com/in/christopher-zhen-5a714881/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondaryColor"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="mailto:chris.zhendev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondaryColor"
        >
          <AiOutlineMail />
        </a>
        <div
          className="cursor-pointer relative hover:text-secondaryColor"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <AiOutlinePhone />
          {showTooltip && (
            <div className="absolute left-full top-0 ml-2 p-2 bg-customLightBlue text-white text-[12px] rounded whitespace-nowrap">
              917-679-1337
            </div>
          )}
        </div>
      </div>
      <div className="w-[2px] h-[150px] bg-darkWhite"></div>
    </div>
  );
}
