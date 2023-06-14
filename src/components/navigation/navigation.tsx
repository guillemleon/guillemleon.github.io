import React, { FC } from "react";
import styles from "./navigation.module.css";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <nav className={styles.container}>
      <h1 className={styles.title}>GUILLEM LEÓN FONT</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.socialMediaContainer}>
            <h2 className={styles.link}>linkedin</h2>
          </div>
        </div>
        <div className={styles.right}>
          <ul className={styles.navigationList}>
            <button className={styles.navigationLink}>ABOUT</button>
            <button className={styles.navigationLink}>WORK</button>
            <button className={styles.navigationLink}>CONTACT</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
