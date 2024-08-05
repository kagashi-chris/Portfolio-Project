import { useState, useEffect } from "react";
import HomeHero from "../../components/Home/HomeHero";
import HomeWorkExperience from "../../components/Home/HomeWorkExperience";
import HomeAboutMe from "../../components/Home/HomeAboutMe";
import HomeProjects from "../../components/Home/HomeProjects";
import HomeGetInTouch from "../../components/Home/HomeGetInTouch";
import RightSideNav from "../../components/Sidenav/RightSideNav";
import LeftSideNav from "../../components/Sidenav/LeftSideNav";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import HomeLoadScreen from "../../components/Home/HomeLoadScreen";

function Home() {
  const [loading, setLoading] = useState(true);
  const getFadeEnterElements = (): Element[] => {
    const fadeDownElements = Array.from(
      document.querySelectorAll(".fade-down-enter")
    );
    const fadeUpElements = Array.from(
      document.querySelectorAll(".fade-up-enter")
    );
    const fadeElements = Array.from(document.querySelectorAll(".fade-enter"));

    return [...fadeDownElements, ...fadeUpElements, ...fadeElements];
  };

  const displayElementsOneAtATime = (
    elements: Element[],
    delay: number = 1000
  ): void => {
    let index = 0;

    const showNextElement = () => {
      if (index < elements.length) {
        const element = elements[index] as HTMLElement;
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
        index++;
        setTimeout(showNextElement, delay);
      }
    };

    showNextElement();
  };

  useEffect(() => {
    if (!loading) {
      const fadeEnter = getFadeEnterElements();
      displayElementsOneAtATime(fadeEnter, 200);
    }
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500000000000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home" className="bg-customBlue">
      {loading ? (
        <HomeLoadScreen setLoading={setLoading} />
      ) : (
        <>
          <StickyHeader />
          <LeftSideNav />
          <RightSideNav />
          <HomeHero />
          <HomeWorkExperience />
          <HomeProjects />
          <HomeAboutMe />
          <HomeGetInTouch />
        </>
      )}
    </div>
  );
}

export default Home;
