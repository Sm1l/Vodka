import React from "react";

import styles from "./Footer.module.scss";
import { Container } from "../Container";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <Container>Footer Component</Container>
    </footer>
  );
};

export { Footer };
