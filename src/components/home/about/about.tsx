"use client";
import React, { FC } from "react";
import styles from "./about.module.css";
import Separator from "@/global/components/separator";

interface AboutProps {
  reference: any;
}

const About: FC<AboutProps> = ({ reference }) => {
  return (
    <section ref={reference} className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span>A</span>BOUT ME
        </h1>
        <Separator />
        <h2 className={styles.subtitle}>
          <span>T</span>hink, <span>D</span>esign, <span>C</span>ode
        </h2>
        <a href="/about" className={styles.button}>
          SEE MORE
        </a>
      </div>
    </section>
  );
};

export default About;
