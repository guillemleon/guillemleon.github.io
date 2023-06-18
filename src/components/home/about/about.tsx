"use client";
import React, { FC, useEffect, useRef } from "react";
import styles from "./about.module.css";
import { useWindowSize } from "@/hooks/useWindowWidth";
import {
  updateMousePositionOnMouseMove,
  updateMousePositionOnScroll,
} from "@/global/utils";

interface AboutProps {
  reference: any;
}

const About: FC<AboutProps> = ({ reference }) => {
  const isTablet =
    typeof window !== "undefined" ? useWindowSize().width < 1224 : true;

  const cursor: any = useRef(null);
  const aboutRef: any = useRef(null);

  useEffect(() => {
    if (window && cursor.current && !isTablet) {
      window.addEventListener("mousemove", handleMouseEffect);
      window.addEventListener("scroll", updateMousePosition);
    }
    return () => window.removeEventListener("mousemove", handleMouseEffect);
  }, []);

  const handleMouseEffect = (e: any) => {
    // Get mouse position
    const position = updateMousePositionOnMouseMove(e);
    const cursorRect = cursor.current.getBoundingClientRect();
    position.x = e.clientX - cursorRect.left;
    position.y = e.clientY - cursorRect.top;

    // Get text container limits
    const textLeft = reference.current.children[1].offsetLeft;
    const textRight =
      reference.current.children[1].offsetLeft +
      reference.current.children[1].clientWidth;
    const textTop = reference.current.children[1].offsetTop;
    const textBottom =
      reference.current.children[1].offsetTop +
      reference.current.children[1].clientHeight;

    // Check if mouse is inside text container or not
    if (
      position.x > textLeft &&
      position.x <= textRight &&
      position.y > textTop &&
      position.y <= textBottom
    ) {
      cursor.current.style.clipPath = `circle(100px at ${position.x}px ${position.y}px)`;
    } else {
      cursor.current.style.clipPath = `circle(20px at ${position.x}px ${position.y}px)`;
    }
  };

  const updateMousePosition = (e: any) => {
    const position = updateMousePositionOnScroll();
    const x = position.x;
    const y = position.y - aboutRef.current.offsetTop;
    cursor.current.style.clipPath = `circle(20px at ${x}px ${y}px)`;
  };

  return (
    <section ref={aboutRef} className={styles.container}>
      <div ref={reference} className={styles.containerMain}>
        <div className={styles.titleMain}>ABOUT ME</div>
        <h2 className={styles.textMain}>
          I'm a Passionate software engineer skilled in frontend and backend
          technologies. Turning ideas into efficient, visually appealing
          solutions with a resolute and detail-oriented approach.
        </h2>
        <a href="/about" className={styles.buttonMain}>
          SEE MORE
        </a>
      </div>
      {!isTablet && (
        <div ref={cursor} className={styles.containerCursor}>
          <div className={styles.titleCursor}>ABOUT ME</div>
          <h2 className={styles.textCursor}>
            I'm a Passionate software engineer skilled in frontend and backend
            technologies. Turning ideas into efficient, visually appealing
            solutions with a resolute and detail-oriented approach.
          </h2>
          <a href="/about" className={styles.buttonCursor}>
            SEE MORE
          </a>
        </div>
      )}
    </section>
  );
};

export default About;
