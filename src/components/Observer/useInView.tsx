import { useEffect, useState, RefObject } from "react";

function useInView(ref: RefObject<HTMLElement>, rootMargin: string = "0px") {
  const [isInView, setInView] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }
        },
        {
          rootMargin,
          threshold: 0.2,
        }
      );

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref, rootMargin]);

  return isInView;
}

export default useInView;
