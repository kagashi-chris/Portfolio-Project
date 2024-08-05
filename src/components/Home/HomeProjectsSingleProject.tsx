import React, { useEffect, useRef } from "react";
import { AiFillProject } from "react-icons/ai";

type Props = {
  imgsrc?: string;
  imgalt?: string;
  title: string;
  url?: string;
  idx: number;
  numberOfInitalDisplay?: number;
  showMore: boolean;
};

export default function HomeProjectsSingleProject({
  imgsrc,
  imgalt,
  title,
  idx,
  url,
  numberOfInitalDisplay = 999,
  showMore,
}: Props) {
  const singleProjectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (idx < numberOfInitalDisplay) {
      singleProjectsRef.current?.classList.remove("fade-project-enter");
    }
  }, []);

  useEffect(() => {
    if (showMore === true) {
      if (singleProjectsRef.current && idx >= numberOfInitalDisplay) {
        const waitIdx = idx - numberOfInitalDisplay;
        const timer = setTimeout(() => {
          if (singleProjectsRef.current) {
            singleProjectsRef.current.style.opacity = "1";
          }
        }, waitIdx * 200);

        return () => clearTimeout(timer);
      }
    } else {
      if (singleProjectsRef.current && idx >= numberOfInitalDisplay) {
        singleProjectsRef.current.style.opacity = "0";
      }
    }
  }, [showMore]);

  return (
    <a href={url} target="_blank">
      <div
        ref={singleProjectsRef}
        className="relative w-full h-[300px] group bg-customLightBlue translate-on-hover shadow-md group rounded-md overflow-hidden fade-project-enter"
      >
        <div className="w-full h-[60%] relative">
          <img
            src={imgsrc}
            alt={imgalt}
            className="w-full h-full object-cover grayscale-img group-hover:grayscale-img-hover"
          />
          <div className="absolute inset-0 bg-customLightBlue opacity-80 transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>
        <div className="w-full h-[40%] flex flex-row items-center p-[32px]">
          <AiFillProject className="text-red-500 w-[30px] h-[30px] mr-[10px]" />
          <h3 className="font-bold ">{title}</h3>
        </div>
      </div>
    </a>
  );
}
