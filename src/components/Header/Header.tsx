"use client";
import React, { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import { Container } from "../Container";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const updateDate = () => {
      const dateNow = new Date().toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      setDate(dateNow);
    };

    updateDate();

    const intervalDate = setInterval(updateDate, 1000);

    return () => clearInterval(intervalDate);
  }, []);

  return (
    <header className={styles.header}>
      <Container>
        <p>{date}</p>
      </Container>
    </header>
  );
};

export { Header };
