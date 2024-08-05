import React, { useState, useRef, useEffect } from "react";
import useInView from "../Observer/useInView";

type Props = {};

export default function ({}: Props) {
  const getInTouchRef = useRef<HTMLDivElement>(null);
  const getInTouchInView = useInView(getInTouchRef);

  useEffect(() => {
    if (getInTouchInView === true) {
      if (getInTouchRef.current) {
        getInTouchRef.current.style.opacity = "1";
      }
    }
  }, [getInTouchInView]);

  return (
    <div
      ref={getInTouchRef}
      id="contact"
      className="bg-customBlue py-[100px] fade-section"
    >
      <div className="max-w-[1200px] m-auto flex flex-col justify-center px-[20px] md:px-[50px] lg:px-[150px] items-center">
        <h2 className="text-secondaryColor text-center mb-[20px] font-bold">
          04. what's next?
        </h2>
        <h3 className="text-center text-[50px] font-bold mb-[40px] text-fontWhite">
          Get In Touch
        </h3>
        <p className="text-center max-w-[600px] mb-[60px] text-darkWhite">
          I’m currently seeking new opportunities and welcome any inquiries.
          Whether you have a question or just want to say hello, feel free to
          reach out and I’ll do my best to respond as soon as I can!
        </p>
        <div className="flex items-center justify-center">
          <a href="mailto:chris.zhendev@gmail.com">
            <button className="font-bold px-[20px] py-[10px] border-2 border-secondaryColor text-secondaryColor rounded-md hover:bg-secondaryColor hover:text-black">
              Say Hello!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
