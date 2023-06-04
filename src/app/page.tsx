"use client";
import React, { useEffect, useRef, useState } from "react";
import Cover from "@/components/home/cover/cover";
import styles from "./page.module.css";
import SidePanel from "@/components/sidepanel/sidepanel";
import About from "@/components/home/about/about";
import Projects from "@/components/home/projects/projects";
import Contact from "@/components/home/contact/contact";

export default function Home() {
  const [currentLevel, setCurrentLevel] = useState(1);

  const containerRef: any = useRef();
  const coverRef: any = useRef();
  const aboutRef: any = useRef();
  const projectsRef: any = useRef();
  const contactRef: any = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", checkCurrentLevel);
    }

    // 👇️ remove the event listener when the component unmounts
    return () => {
      containerRef.current.removeEventListener("scroll", checkCurrentLevel);
    };
  }, []);

  const checkCurrentLevel = () => {
    switch (containerRef.current.scrollTop) {
      case coverRef.current.offsetTop:
        setCurrentLevel(1);
        return;
      case aboutRef.current.offsetTop:
        setCurrentLevel(2);
        return;
      case projectsRef.current.offsetTop:
        setCurrentLevel(3);
        return;
      case contactRef.current.offsetTop:
        setCurrentLevel(4);
        return;
    }
  };

  return (
    <main ref={containerRef} className={styles.main}>
      <SidePanel currentLevel={currentLevel} levels={4} />
      <div className={styles.content}>
        <Cover reference={coverRef} containerRef={containerRef} />
        <About reference={aboutRef} />
        <Projects reference={projectsRef} />
        <Contact reference={contactRef} />
      </div>
    </main>
  );
}
