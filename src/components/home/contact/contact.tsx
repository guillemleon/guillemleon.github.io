"use client";
import React, { FC } from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import backgroundImage from "../../../../public/images/rising-planet-black.jpg";

interface ContactProps {
  reference: any;
}

const Contact: FC<ContactProps> = (props) => {
  const { reference } = props;

  return (
    <section ref={reference} className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>GET IN TOUCH</h1>
        <h4 className={styles.subtitle}>guillem.leonf@gmail.com</h4>
      </div>
      <div className={styles.backgroundImageContainer}>
        <Image
          className={styles.backgroundImage}
          src={backgroundImage}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default Contact;
