import { useEffect, useRef } from "react";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";

type Props = {
  setLoading: (loading: boolean) => void;
};

export default function HomeLoadScreen({ setLoading }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const images =
        containerRef.current.querySelectorAll<HTMLImageElement>(".logo-part");
      images.forEach((image, index) => {
        setTimeout(
          () => {
            image.style.opacity = "1";
          },
          (index + 1) * 1000
        );
      });

      const totalDelay = (images.length + 1) * 1000;
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = "transform 0.25s";
          containerRef.current.style.transform = "scale(0)";
          containerRef.current.addEventListener(
            "transitionend",
            () => {
              setTimeout(() => {
                setLoading(false);
              }, 200);
            },
            { once: true }
          );
        }
      }, totalDelay);
    }
  }, []);

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div ref={containerRef} className="relative w-[40px] h-[40px]">
        <img
          className="absolute logo-part opacity-0"
          src={logo1}
          alt="part of C logo 1"
        />
        <img
          className="absolute logo-part opacity-0"
          src={logo2}
          alt="part of C logo 2"
        />
        <img
          className="absolute logo-part opacity-0"
          src={logo3}
          alt="part of C logo 3"
        />
        <img
          className="absolute logo-part opacity-0"
          src={logo4}
          alt="part of C logo 4"
        />
        <img
          className="absolute logo-part opacity-0"
          src={logo5}
          alt="part of C logo 5"
        />
      </div>
    </section>
  );
}
