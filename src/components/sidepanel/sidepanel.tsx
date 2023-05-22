import React, { FunctionComponent } from "react";
import styles from "./sidepanel.module.css";

interface OwnProps {
  currentLevel: number;
  levels: number;
}

type Props = OwnProps;

const SidePanel: FunctionComponent<Props> = (props) => {
  const { currentLevel, levels } = props;

  const displayBars = () => {
    return (
      <ul className={styles.levelList}>
        {Array.from(Array(levels), (e, i) => {
          return (
            <li
              key={i}
              className={
                i === currentLevel - 1 ? styles.currentLevel : styles.level
              }
            />
          );
        })}
      </ul>
    );
  };

  return <div className={styles.sidepanelContainer}>{displayBars()}</div>;
};

export default SidePanel;
