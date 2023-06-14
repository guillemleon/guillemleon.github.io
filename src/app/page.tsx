"use client";
import React, { useRef } from "react";
import Cover from "@/components/home/cover/cover";
import About from "@/components/home/about/about";
import styles from "./page.module.css";
import Navigation from "@/components/navigation/navigation";
import Work from "@/components/home/work/work";

export default function Home() {
  const coverRef: any = useRef(null);
  const aboutRef: any = useRef(null);

  return (
    <main className={styles.container}>
      <Navigation />

      <Cover reference={coverRef} />
      <About reference={aboutRef} />
      <Work />
    </main>
  );
}
