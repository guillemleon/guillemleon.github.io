"use client";
import React, { FC, useEffect, useRef } from "react";
import styles from "./cover.module.css";
import Separator from "@/global/components/separator";
import Image from "next/image";
import selfSunset from "../../../assets/images/sunset-7.jpg";

interface CoverProps {
  reference: any;
  containerRef: any;
}

const Cover: FC<CoverProps> = ({ reference, containerRef }) => {
  let coverElements = {
    coverTitle: useRef(null),
    separator: useRef(null),
    coverSubtitle: useRef(null),
  };

  useEffect(() => {
    handleAnimation(1, 0);
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScrollDown);
    }
  }, []);

  const handleScrollDown = () => {
    if (containerRef.current.scrollTop > 0) {
      console.log(containerRef.current.clientHeight);
      handleAnimation(0, -200);
    }
    if (containerRef.current.scrollTop === 0) {
      handleAnimation(1, 0);
    }
  };

  function handleAnimation(opacity: number, translateY: number) {
    let index = 0;
    for (const [key, value] of Object.entries(coverElements)) {
      if (value.current) {
        setInterval(() => {
          value.current.style.opacity = opacity;
          value.current.style.transform = `translateY(${translateY}px)`;
        }, 300 * index);
        index++;
      }
    }
  }

  return (
    <section ref={reference} className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 ref={coverElements.coverTitle} className={styles.title}>
          Guillem Leon
        </h1>
        <div
          className={styles.separatorContainer}
          ref={coverElements.separator}
        >
          <Separator />
        </div>
        <h2 ref={coverElements.coverSubtitle} className={styles.subtitle}>
          Full-Stack Developer
        </h2>
      </div>
      <div className={styles.coverImageContainer}>
        <div className={styles.overlayer} />
        <Image
          src={selfSunset}
          alt="Myself image with sunset in Barcelona"
          className={styles.coverImage}
        />
      </div>
    </section>
  );
};

export default Cover;
