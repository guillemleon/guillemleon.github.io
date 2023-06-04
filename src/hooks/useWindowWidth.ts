"use client";
import { useEffect, useState } from "react";

function useWindowWidth() {
  const isOnBrowser = typeof window !== "undefined";
  const [width, setWidth] = useState(isOnBrowser ? window.innerWidth : 1200);

  useEffect(() => {
    if (!isOnBrowser) {
      return;
    }
    const callback = () => setWidth(window.innerWidth);
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, []);

  return width;
}

export default useWindowWidth;
