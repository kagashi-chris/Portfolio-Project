import React, { useState, useRef, useEffect } from "react";
import useInView from "../Observer/useInView";
import mejpg from "../../assets/images/me.jpg";

function HomeAboutMe() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const aboutMeInView = useInView(aboutMeRef);

  useEffect(() => {
    if (aboutMeInView === true) {
      if (aboutMeRef.current) {
        aboutMeRef.current.style.opacity = "1";
      }
    }
  }, [aboutMeInView]);

  return (
    <section
      ref={aboutMeRef}
      id="about"
      className="bg-customBlue py-[100px] fade-section"
    >
      <div className="max-w-[1200px] m-auto flex flex-col justify-center px-[20px] md:px-[50px] lg:px-[150px] ">
        <div className="flex flex-row mb-[40px] items-center">
          <div className="lg:hidden w-[300px] h-[2px] bg-darkerWhite mr-[20px]"></div>
          <h2 className="whitespace-nowrap heading-2 font-bold text-center lg:text-left text-fontWhite mr-[20px]">
            <span className="text-red-500">03. </span>
            About Me
          </h2>
          <div className="w-[300px] h-[2px] bg-darkerWhite"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[50px] text-fontDarkerWhite">
          <div className="w-full lg:w-[60%]">
            <p className="mb-[20px]">
              Hello! My name is Chris, and I enjoy making things. From 3D models
              to Instagram-worthy food, and now websites, I have always loved
              creating. My interest in web development began around 2019 when I
              was a 3D developer and started exploring the programming side of
              Unity. Over time, my fascination with programming grew, and I
              decided to switch my career to web development during COVID.
              <br></br>
              <br></br>
              Fast forward to today, I am now a web developer with 2 years of
              experience under my belt. My main focus these days is building
              aesthetically pleasing and accessible websites.
              <br></br>
              <br></br>
              Here are some of the technologies I have been recently working
              with:
            </p>
            <ul className=" grid grid-cols-2 gap-x-4 gap-y-2">
              <li className="relative recent-tech ">
                <span className="ml-[20px]">React</span>
              </li>
              <li className="relative recent-tech ">
                <span className="ml-[20px]">Typescript</span>
              </li>
              <li className="relative recent-tech ">
                <span className="ml-[20px]">Wordpress</span>
              </li>
              <li className="relative recent-tech ">
                <span className="ml-[20px]">Javascript</span>
              </li>
              <li className="relative recent-tech ">
                <span className="ml-[20px]">Node.js</span>
              </li>
              <li className="relative recent-tech ">
                <span className="ml-[20px]">C#</span>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-[40%] items-center flex justify-center ">
            <div className="relative">
              <div className="absolute w-[300px] h-[300px] top-0 left-0 border-4 border-secondaryColor rounded-md transform translate-x-4 translate-y-4"></div>
              <div className="w-[300px] h-[300px] relative rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-secondaryColor opacity-40 transition-opacity duration-500 hover:opacity-0"></div>
                <img
                  className="w-full h-full object-cover z-5"
                  src={mejpg}
                  alt="Image of "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAboutMe;
