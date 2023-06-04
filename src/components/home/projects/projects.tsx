"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./projects.module.css";
import Separator from "@/global/components/separator";
import Image from "next/image";
import caixabank from "../../../assets/images/caixabank.jpg";
import useWindowWidth from "@/hooks/useWindowWidth";

type ProjectsProps = {
  reference: any;
};

const Projects: FC<ProjectsProps> = ({ reference }) => {
  const isMobile = useWindowWidth() <= 1140;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  const renderProject = (): JSX.Element => {
    return (
      <div className={styles.projectContainer}>
        <a href="/projects" className={styles.project}>
          <Image
            className={styles.projectImage}
            alt="Caixabank office image"
            src={caixabank}
          />
          <div className={styles.infoContainer}>
            <h4 className={styles.projectTitle}>CAIXABANK TECH</h4>
          </div>
        </a>
      </div>
    );
  };

  return (
    <section ref={reference} className={styles.container}>
      {!isMobile && renderProject()}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span>P</span>ROJECTS
        </h1>
        <Separator />
        <a href="/projects" className={styles.button}>
          SEE ALL
        </a>
      </div>
      {isMobile && renderProject()}
    </section>
  );
};

export default Projects;
