import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
type Props = {};

export default function RightSideNav({}: Props) {
  return (
    <div className="text-fontDarkerWhite hidden lg:flex flex-col fixed bottom-0 z-10 right-[40px] items-center justify-center fade-enter">
      <div className="mb-[20px]">
        <a
          href="mailto:chris.zhendev@gmail.com"
          className="hover:text-secondaryColor"
        >
          <span className="verticle-text">chris.zhendev@gmail.com</span>
        </a>
      </div>

      <div className="w-[2px] h-[150px] bg-darkWhite"></div>
    </div>
  );
}
