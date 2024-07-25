import React from "react";

import styles from "./Welcome.module.scss";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.title}>Водочка Хедина</h1>
    </div>
  );
};

export { Welcome };
