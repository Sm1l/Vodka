import React from "react";

import styles from "./Header.module.scss";
import { Container } from "../Container";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Container>Header Component</Container>
    </header>
  );
};

export { Header };
