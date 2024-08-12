import React, { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    orientation:
      window.innerWidth > window.innerHeight ? "landscape" : "portrait",
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        orientation:
          window.innerWidth > window.innerHeight ? "landscape" : "portrait",
      });
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  const getDevice = (size: any) => {
    if (size.width <= 992) {
      return "mobile";
    } else return "desktop";
  };

  return { deviceSize: screenSize, device: getDevice(screenSize) };
};

export default useScreenSize;
