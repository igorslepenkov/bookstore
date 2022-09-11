import { useEffect, useState } from "react";
import { MediaBreakpoints } from "../ui";

export const useScroll = (
  ref: React.RefObject<HTMLUListElement>,
  windowWidth: number
) => {
  const [scrollX, setScrollX] = useState<number>(() => {
    if (ref.current) {
      return ref.current.scrollLeft;
    } else return 0;
  });

  const [scrollValue, setScrollValue] = useState<number>(250);

  useEffect(() => {
    if (windowWidth <= MediaBreakpoints.MD) {
      setScrollValue(250 + 32);
    } else if (windowWidth <= MediaBreakpoints.LG) {
      setScrollValue(328 + 32);
    } else {
      setScrollValue(352 + 32);
    }
  }, [windowWidth]);

  if (ref.current) {
    ref.current.onscroll = ({ target }: any) => {
      if (target) {
        setScrollX(target.scrollLeft);
      }
    };
  }

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scroll({
        left: scrollX + scrollValue,
      });
    }
  };

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scroll({
        left: scrollX - scrollValue,
      });
    }
  };

  return { scrollLeft, scrollRight };
};
