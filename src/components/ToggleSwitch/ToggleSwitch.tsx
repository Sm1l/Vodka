import React from "react";

import styles from "./ToggleSwitch.module.scss";
import { TScreen } from "../Vodka";

interface ToggleSwitchProps {
  leftLabel: string;
  rightLabel: string;
  screen: TScreen;
  setScreen: React.Dispatch<React.SetStateAction<TScreen>>;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ leftLabel, rightLabel, screen, setScreen }) => {
  const handleToggleChange = () => {
    setScreen((state) => (state === "collection" ? "new" : "collection"));
  };
  return (
    <div className={styles.toggleSwitch}>
      <span className={styles.label} onClick={() => setScreen("collection")}>
        {leftLabel}
      </span>
      <div className={styles.switchContainer} onClick={handleToggleChange}>
        <div className={`${styles.slider} ${screen === "new" ? styles.checked : ""}`}></div>
      </div>
      <span className={styles.label} onClick={() => setScreen("new")}>
        {rightLabel}
      </span>
    </div>
  );
};

export { ToggleSwitch };
