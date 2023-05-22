import React, { FunctionComponent } from "react";
import * as styles from "./header.module.css";
import earth from "../../assets/images/earth.png";
import menu from "../../assets/images/menu.png";
import Image from "next/image";

interface OwnProps {}

type Props = OwnProps;

const header: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Guillem León</h1>
        <div className={styles.menuContainer}>
          <button className={styles.button}>
            <Image
              src={earth}
              alt="Earth icon to change language"
              className={styles.icon}
            />
          </button>
          <button className={styles.button}>
            <Image
              src={menu}
              alt="Earth icon to change language"
              className={styles.icon}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default header;
