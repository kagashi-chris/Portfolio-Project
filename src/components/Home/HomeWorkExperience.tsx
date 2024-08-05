import React, { useState, useRef, useEffect } from "react";
import useInView from "../Observer/useInView";
import HomeWorkExperienceJob from "./HomeWorkExperienceJob";
import HomeWorkExperienceButton from "./HomeWorkExperienceButton";

function HomeWorkExperience() {
  const [selectedJobIdx, setSelectedJobIdx] = useState<number>(0);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const workExperienceInView = useInView(workExperienceRef);

  const calculateTopPosition = (index: number) => {
    return `${index * 42}px`;
  };

  const coreEducationContent = [
    "Led the design and development of a Django-based web application, incorporating advanced data manipulation and secure payment gateways like Stripe.",
    "Worked closely with higher education institutions to create tools and websites that streamline student enrollment and enhance usability, utilizing CMS platforms such as WordPress, Cascade, LeadSquared, and TerminalFour.",
    "Collaborated with designers, sales professionals, and project managers to deliver web solutions that meet organizational goals and client expectations, actively participating in brainstorming sessions and team meetings.",
    "Served as project lead for multiple universities, ensuring the continual maintenance and updates of their websites, and leveraging platforms like Slate to improve student portal access and usability.",
  ];

  const gritseeContent = [
    "Collaborated closely with the CEO to design and develop tools aimed at reducing the workload of the sales team, enhancing overall efficiency.",
    "Utilized Retool and JavaScript to create user-friendly forms that enable quick and efficient data entry into the database, streamlining data management processes.",
    "Engaged in identifying and fixing bugs, writing clean and maintainable code, and ensuring the reliability and functionality of software through rigorous testing.",
    "Conducted thorough testing of developed features and tools to ensure they function correctly, maintaining high standards of quality and performance.",
  ];

  const hudsonContent = [
    "Utilized 3ds Max, Unreal Engine, Photoshop, and Substance Painter to create highly realistic renderings for high-end furniture clients, showcasing the intricate details and luxurious finishes of custom pieces.",
    "Enhanced the company’s online presence by improving the aesthetics and functionality of the company website, and created various graphic assets to support the company’s marketing and branding efforts.",
    "Worked closely with clients to design and customize furniture pieces to their specifications, ensuring their vision was accurately captured and translated into the final product.",
    "Collaborated with the workshop team to ensure that furniture pieces were built to the correct dimensions and met the highest standards of quality, facilitating seamless production and client satisfaction.",
  ];

  const allJobs = [
    {
      workplace: "Core Education",
      title: "Web Developer",
      time: "Jan 2023 - July 2024",
      content: coreEducationContent,
    },
    {
      workplace: "Gritsee",
      title: "Software Developer",
      time: "Jan 2022 - April 2022",
      content: gritseeContent,
    },
    {
      workplace: "Hudson Furniture",
      title: "3D Artist",
      time: "Nov 2016 - Aug 2021",
      content: hudsonContent,
    },
  ];

  useEffect(() => {
    if (workExperienceInView === true) {
      if (workExperienceRef.current) {
        workExperienceRef.current.style.opacity = "1";
      }
    }
  }, [workExperienceInView]);

  return (
    <section
      ref={workExperienceRef}
      id="work"
      className="bg-customBlue py-[100px] fade-section"
    >
      <div className="max-w-[1000px] m-auto flex flex-col justify-center px-[20px] md:px-[50px] lg:px-[150px]">
        <div className="flex flex-row mb-[40px] items-center">
          <div className="lg:hidden w-[300px] h-[2px] bg-darkerWhite mr-[20px]"></div>
          <h2 className="whitespace-nowrap heading-2 font-bold text-center lg:text-left text-fontWhite mr-[20px]">
            <span className="text-red-500">01. </span>
            Where I’ve Worked
          </h2>
          <div className="w-[300px] h-[2px] bg-darkerWhite"></div>
        </div>
        <div className="flex lg:flex-row flex-col gap-[10px] lg:min-h-[420px]">
          <div className=" lg:flex-col flex-row relative hidden lg:flex">
            {allJobs.map((item, index) => (
              <HomeWorkExperienceButton
                setSelectedJobIdx={setSelectedJobIdx}
                job={item.workplace}
                idx={index}
                selectedIdx={selectedJobIdx}
                key={index}
              />
            ))}
            <div
              className="work-highlight absolute w-[2px] h-[42px] left-0 top-0 bg-red-500"
              style={{ top: calculateTopPosition(selectedJobIdx) }}
            ></div>
          </div>

          <div className="relative lg:hidden flex justify-center mb-[30px]">
            <select
              onChange={(e) => {
                setSelectedJobIdx(Number(e.target.value));
              }}
              value={selectedJobIdx}
              className="border border-gray-300 p-2 rounded-md font-bold bg-transparent text-fontWhite"
            >
              {allJobs.map((item, index) => (
                <option
                  className="font-bold text-black"
                  value={index}
                  key={index}
                >
                  {item.workplace}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <HomeWorkExperienceJob
              title={allJobs[selectedJobIdx].title}
              workplace={allJobs[selectedJobIdx].workplace}
              time={allJobs[selectedJobIdx].time}
              content={allJobs[selectedJobIdx].content}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWorkExperience;
