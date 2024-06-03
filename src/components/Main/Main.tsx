import React from "react";

import styles from "./Main.module.scss";
import { Container } from "../Container";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className={styles.main}>
      <Container>{children}</Container>
    </main>
  );
};

export { Main };
