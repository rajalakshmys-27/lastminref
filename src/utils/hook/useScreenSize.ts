import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.screen.width;
      if (newScreenWidth !== screenWidth) {
        setScreenWidth(newScreenWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return { deviceSize: screenWidth };
};

export default useScreenSize;
