import { useState, useEffect } from "react";

const isBrowser = () => typeof window !== "undefined";

// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: isBrowser() ? window.innerWidth : 1920,
    height: isBrowser() ? window.innerHeight : 1440,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: isBrowser() ? window.innerWidth : 1920,
        height: isBrowser() ? window.innerHeight : 1440,
      });
    }

    // Add event listener
    isBrowser() && window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
