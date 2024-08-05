import React, { useState, useRef, useEffect } from "react";
import useInView from "../Observer/useInView";
import HomeProjectsSingleProject from "../../components/Home/HomeProjectsSingleProject";
import coreedu from "../../assets/images/coreedu.png";
import corefoundation from "../../assets/images/corefoundation.png";
import ahuedu from "../../assets/images/ahuedu.png";
import sau1edu from "../../assets/images/sau1edu.png";
import sau2edu from "../../assets/images/sau2edu.png";
import sau3edu from "../../assets/images/sau3edu.png";
import ucedu from "../../assets/images/ucedu.png";
import wauedu from "../../assets/images/wauedu.png";
import wwuedu from "../../assets/images/wwuedu.png";
import sncedu from "../../assets/images/sncedu.png";

export default function HomeProjects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectsInView = useInView(projectsRef);

  const listOfProjects = [
    {
      imgsrc: coreedu,
      imgalt: "image of core education website",
      title: "Core Education",
      url: "https://www.core.edu",
    },
    {
      imgsrc: corefoundation,
      imgalt: "image of core foundation website",
      title: "Core Foundation",
      url: "https://foundation.core.edu/",
    },
    {
      imgsrc: ahuedu,
      imgalt: "image of core advent health university website",
      title: "Advent Health University",
      url: "https://workforce.ahu.edu/",
    },
    {
      imgsrc: sau1edu,
      imgalt: "image of st ambrose website",
      title: "St Ambrose University",
      url: "https://workforce.sau.edu",
    },
    {
      imgsrc: sncedu,
      imgalt: "image of st norbert university website",
      title: "St Norbert University",
      url: "https://www.snc.edu/",
    },
    {
      imgsrc: sau3edu,
      imgalt: "image of st ambrose website",
      title: "St Ambrose University",
      url: "https://sau.edu/",
    },
    {
      imgsrc: ucedu,
      imgalt: "image of union college website",
      title: "Union College",
      url: "https://workforce.ucollege.edu",
    },
    {
      imgsrc: wauedu,
      imgalt: "image of washington adventist university",
      title: "Washington Adventist University",
      url: "https://professionalworkforcedevelopment.wau.edu",
    },
    {
      imgsrc: wwuedu,
      imgalt: "image of walla walla university website",
      title: "Walla Walla University",
      url: "https://wwu.core.edu",
    },
    {
      imgsrc: sau2edu,
      imgalt: "image of southern adventist university website",
      title: "Southern Adventist University",
      url: "https://sau.core.edu",
    },
  ];
  const numberOfInitalDisplay = 6;
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    if (projectsInView === true) {
      if (projectsRef.current) {
        projectsRef.current.style.opacity = "1";
      }
    }
  }, [projectsInView]);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="bg-customBlue py-[100px] fade-section"
    >
      <div className="max-w-[1200px] m-auto flex flex-col justify-center px-[20px] md:px-[50px] lg:px-[100px] text-white">
        <div className="flex flex-row mb-[60px] items-center">
          <div className="lg:hidden w-[300px] h-[2px] bg-darkerWhite mr-[20px]"></div>
          <h2 className="whitespace-nowrap heading-2 font-bold text-center lg:text-left text-fontWhite mr-[20px]">
            <span className="text-red-500">02. </span>
            Projects I Worked On
          </h2>
          <div className="w-[300px] h-[2px] bg-darkerWhite"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-[40px]">
          {listOfProjects.map((item, index) => {
            if (showMore === true || index <= numberOfInitalDisplay - 1) {
              return (
                <HomeProjectsSingleProject
                  imgsrc={item.imgsrc}
                  imgalt={item.imgalt}
                  title={item.title}
                  url={item.url}
                  key={index}
                  numberOfInitalDisplay={numberOfInitalDisplay}
                  idx={index}
                  showMore={showMore}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              if (showMore === true) {
                setShowMore(false);
              } else {
                setShowMore(true);
              }
            }}
            className="font-bold px-[20px] py-[10px] border-2 border-secondaryColor text-secondaryColor rounded-md hover:bg-secondaryColor hover:text-black"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
