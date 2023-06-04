import React, { FC } from "react";
import styles from "./contact.module.css";
import Separator from "@/global/components/separator";
import linkedin from "../../../assets/images/linkedin.png";
import Image from "next/image";

interface ContactProps {
  reference: any;
}

const Contact: FC<ContactProps> = ({ reference }) => {
  return (
    <section ref={reference} className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span>G</span>ET IN TOUCH
        </h1>
        <Separator />
        <h2 className={styles.email}>guillem.leonf@gmail.com</h2>
        <a
          href={"https://www.linkedin.com/in/guillem-le%C3%B3n-font-904ba7105/"}
          className={styles.button}
          target="_blank"
        >
          <Image
            src={linkedin}
            alt="Link to Guillem Leon's Linkedin profile"
            className={styles.icon}
          />
          <p className={styles.linkedinTitle}>Linkedin</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
