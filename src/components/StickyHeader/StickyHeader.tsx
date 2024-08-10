import { useState } from "react";
import clogo2 from "../../assets/images/clogo2.png";
import { AiOutlineMenu } from "react-icons/ai";

export default function StickyHeader() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <header className="fixed top-0 left-0 w-full bg-customBlue bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md z-10">
      <div className="container mx-auto py-6 px-6 flex justify-between items-center">
        <a href="#hero" className="fade-down-enter">
          <img src={clogo2} alt="c logo" className="w-[30px] h-[30px]" />
        </a>
        <nav className="flex-row gap-[20px] items-center justify-center hidden lg:flex">
          <div className="text-fontWhite hover:text-secondaryColor font-medium fade-down-enter">
            <a href="#work">
              <span className="text-secondaryColor font-bold mr-[4px]">
                01.
              </span>
              Work
            </a>
          </div>
          <div className="text-fontWhite hover:text-secondaryColor font-medium fade-down-enter">
            <a href="#projects">
              <span className="text-secondaryColor font-bold mr-[4px]">
                02.
              </span>
              Projects
            </a>
          </div>
          <div className="text-fontWhite hover:text-secondaryColor font-medium fade-down-enter">
            <a href="#about">
              <span className="text-secondaryColor font-bold mr-[4px]">
                03.
              </span>
              About Me
            </a>
          </div>
          <div className="text-fontWhite hover:text-secondaryColor font-medium fade-down-enter">
            <a href="#contact">
              <span className="text-secondaryColor font-bold mr-[4px]">
                04.
              </span>
              Contact
            </a>
          </div>
          <div className="fade-down-enter">
            <a
              href="/ChrisZhenResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-bold px-[20px] py-[10px] border-2 border-secondaryColor text-secondaryColor rounded-md hover:bg-secondaryColor hover:text-black">
                Resume
              </button>
            </a>
          </div>
        </nav>
        <nav className="lg:hidden relative">
          <AiOutlineMenu
            onClick={handleNav}
            className="w-[30px] h-[30px] z-[100] text-secondaryColor fixed top-6 right-8 cursor-pointer"
          />
          <div
            className={`fixed top-0 right-0 w-[200px] h-screen bg-customLightBlue flex flex-col justify-center items-center z-20 transform ${
              nav ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <a
              href="#work"
              className="w-[75%] p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-left"
            >
              <span className="pl-4 text-fontWhite font-bold">
                <span className="text-secondaryColor mr-1">01.</span> Work
              </span>
            </a>
            <a
              href="#projects"
              className="w-[75%] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <span className="pl-4 text-fontWhite font-bold">
                <span className="text-secondaryColor mr-1">02.</span> Projects
              </span>
            </a>
            <a
              href="#about"
              className="w-[75%] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <span className="pl-4 text-fontWhite font-bold">
                <span className="text-secondaryColor mr-1">03.</span> About
              </span>
            </a>
            <a
              href="#contact"
              className="w-[75%] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <span className="pl-4 text-fontWhite font-bold">
                <span className="text-secondaryColor mr-1">04.</span> Contact
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
