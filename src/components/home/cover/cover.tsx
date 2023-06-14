"use client";
import React, { FC, useRef, useEffect } from "react";
import styles from "./cover.module.css";
import Image from "next/image";
import backgroundImage from "../../../../public/images/sunset-7.jpg";
import { useWindowSize } from "@/hooks/useWindowWidth";
import {
  updateMousePositionOnScroll,
  updateMousePositionOnMouseMove,
} from "@/global/utils";

interface CoverProps {
  reference: any;
}

const Cover: FC<CoverProps> = ({ reference }) => {
  const isTablet =
    typeof window !== "undefined" ? useWindowSize().width < 1224 : true;

  const cursor: any = useRef(null);

  useEffect(() => {
    if (window && cursor.current && !isTablet) {
      window.addEventListener("mousemove", handleMouseEffect);
      window.addEventListener("scroll", updateMousePosition);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseEffect);
      window.removeEventListener("scroll", updateMousePosition);
    };
  }, []);

  // Circle follows mouse position
  const handleMouseEffect = (e: any) => {
    const position = updateMousePositionOnMouseMove(e);
    cursor.current.style.clipPath = `circle(200px at ${position.x}px ${position.y}px)`;
  };

  const updateMousePosition = () => {
    const position = updateMousePositionOnScroll();
    cursor.current.style.clipPath = `circle(200px at ${position.x}px ${position.y}px)`;
  };

  const renderBackground = () => {
    return (
      <>
        <div className={styles.titleContainer}>
          <h1 className={styles.titleFirstLayer}>
            Crafting innovation through the art of code.
          </h1>
        </div>
        <div className={styles.backgroundContainer}>
          <Image
            className={styles.backgroundImage}
            src={backgroundImage}
            alt="Picture of the author"
          />
        </div>
      </>
    );
  };

  return (
    <section ref={reference} className={styles.container}>
      <div className={styles.overlayer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.titleOverlayer}>
            Crafting innovation through the art of code.
          </h1>
        </div>
      </div>
      <div className={styles.firstLayer}>{renderBackground()}</div>
      {!isTablet && (
        <div ref={cursor} className={styles.cursorLayer}>
          {renderBackground()}
        </div>
      )}
    </section>
  );
};

export default Cover;
