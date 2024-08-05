import React from "react";
import HomeWorkExperienceSingleExperience from "./HomeWorkExperienceSingleExperience";

type Props = {
  title: string;
  workplace: string;
  time: string;
  content: string[];
};

export default function HomeWorkExperienceJob({
  title,
  workplace,
  time,
  content,
}: Props) {
  return (
    <div>
      <h1 className="font-bold text-fontWhite ">
        {title} <span className="text-red-500">@ {workplace}</span>
      </h1>
      <h2 className="mb-[25px] text-fontWhite "> {time} </h2>
      <div className="space-y-4 text-fontDarkerWhite ">
        {content.map((item, index) => (
          <HomeWorkExperienceSingleExperience key={index} content={item} />
        ))}
      </div>
    </div>
  );
}
