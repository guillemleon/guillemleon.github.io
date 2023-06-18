"use client";
import React, { FC } from "react";
import styles from "./work.module.css";
import work from "../../../global/data/work.json";
import { useWindowSize } from "@/hooks/useWindowWidth";

interface WorkProps {
  reference: any;
}

const Work: FC<WorkProps> = ({ reference }) => {
  const isMobile =
    typeof window !== "undefined" ? useWindowSize().width < 840 : true;

  const renderWorkCard = (work: any) => {
    return (
      <div key={work.id} className={styles.cardContainer}>
        <div className={styles.card}>
          {!isMobile && work.id % 2 != 0 && (
            <div className={styles.idContainer}>
              <div className={styles.id}>{work.id}</div>
            </div>
          )}
          <div
            className={
              work.id % 2 != 0
                ? styles.titleContainerRight
                : styles.titleContainerLeft
            }
          >
            <div className={styles.title}>{work.title}</div>
            <div className={styles.subtitle}>{work.subtitle}</div>
          </div>
          {!isMobile && work.id % 2 === 0 && (
            <div className={styles.idContainer}>
              <div className={styles.id}>{work.id}</div>
            </div>
          )}
        </div>
        <ul className={styles.projectsContainer}>
          {work.work.map((project: any) => {
            const i = project.imagePath;
            return (
              <a
                key={project.id}
                target="_blank"
                href={project.siteUrl}
                className={styles.project}
              >
                <div className={styles.projectOverlayer}>{project.name}</div>
                <img
                  src={i}
                  alt="Image"
                  className={styles.projectImage}
                  loading="lazy"
                />
              </a>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <section ref={reference} className={styles.container}>
      <ul className={styles.workContainer}>
        {work.map((w) => renderWorkCard(w))}
      </ul>
    </section>
  );
};

export default Work;
