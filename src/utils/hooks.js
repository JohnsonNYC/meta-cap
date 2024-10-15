import { useState, useEffect } from "react";
import { useMediaPredicate as useMediaPredicateLib } from "react-media-hook";

export const useMediaPredicate = (breakPoint) => {
  const [isMobileState, setIsMobileState] = useState(false);

  const isMobile = useMediaPredicateLib(breakPoint);

  useEffect(() => {
    setIsMobileState(isMobile);
  }, [isMobile]);

  return isMobileState;
};
