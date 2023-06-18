import React, { FC } from "react";
import styles from "./navigation.module.css";
import { useWindowSize } from "@/hooks/useWindowWidth";

interface NavigationProps {
  coverRef: any;
  aboutRef: any;
  workRef: any;
  contactRef: any;
}

const Navigation: FC<NavigationProps> = (props) => {
  const { coverRef, aboutRef, workRef, contactRef } = props;
  const isMobile = useWindowSize().width < 1224 || true;

  const scrollTo = (reference: any) => {
    reference.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const renderList = (): JSX.Element => {
    return (
      <div className={styles.right}>
        <ul className={styles.navigationList}>
          <a href="/" className={styles.navigationLink}>
            HOME
          </a>
          <button
            onClick={() => scrollTo(aboutRef)}
            className={styles.navigationLink}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollTo(workRef)}
            className={styles.navigationLink}
          >
            WORK
          </button>
          <button
            onClick={() => scrollTo(contactRef)}
            className={styles.navigationLink}
          >
            CONTACT
          </button>
        </ul>
      </div>
    );
  };

  return (
    <nav className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>GUILLEM LEÓN FONT</h1>
        {isMobile && renderList()}
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.socialMediaContainer}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/guillem-le%C3%B3n-font-904ba7105/"
              className={styles.link}
            >
              linkedin
            </a>
          </div>
        </div>
        {!isMobile && renderList()}
      </div>
    </nav>
  );
};

export default Navigation;
