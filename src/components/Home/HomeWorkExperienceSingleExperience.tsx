import React from "react";

type Props = {
  content: string;
};

export default function HomeWorkExperienceSingleExperience({ content }: Props) {
  return <div className="single-experience relative pl-[20px]">{content}</div>;
}
