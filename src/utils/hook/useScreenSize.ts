import React, { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDevice = (size: any) => {
    if (size.width <= 480) {
      return "mobile";
    } else if (size.width > 480 && size.width <= 767) {
      return "tablet";
    } else return "desktop";
  };

  return { deviceSize: screenSize, device: getDevice(screenSize) };
};

export default useScreenSize;
