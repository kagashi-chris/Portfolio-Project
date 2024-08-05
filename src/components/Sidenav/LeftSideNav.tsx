import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

export default function leftSideNav() {
  return (
    <div className="text-fontDarkerWhite hidden lg:flex flex-col fixed bottom-0 z-10 left-[40px] items-center justify-center fade-enter">
      <div className="flex flex-col gap-[25px] text-[24px] mb-[20px]">
        <a
          href="https://www.linkedin.com/in/christopher-zhen-5a714881/"
          className="hover:text-secondaryColor"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="mailto:chris.zhendev@gmail.com"
          className="hover:text-secondaryColor"
        >
          <AiOutlineMail />
        </a>
        <AiOutlinePhone />
      </div>
      <div className="w-[2px] h-[150px] bg-darkWhite"></div>
    </div>
  );
}
