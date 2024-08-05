import React from "react";

type Props = {
  job: string;
  setSelectedJobIdx: (job: number) => void;
  idx: number;
  selectedIdx: number;
};

export default function HomeWorkExperienceButton({
  setSelectedJobIdx,
  job,
  idx,
  selectedIdx,
}: Props) {
  const isSelected = selectedIdx === idx;

  return (
    <button
      className={`text-left h-[42px] w-[180px] px-[20px] border-l-0 lg:border-l-[2px] border-b-2 lg:border-b-0 border-gray-500 
        ${isSelected ? "text-white" : "text-fontDarkerWhite"}`}
      onClick={() => setSelectedJobIdx(idx)}
    >
      <span className="whitespace-nowrap">{job}</span>
    </button>
  );
}
