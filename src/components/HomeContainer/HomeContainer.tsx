"use client";
import React, { useState } from "react";

import styles from "./HomeContainer.module.scss";
import { Welcome } from "../Welcome";
import { Login } from "../Login";
import { Vodka } from "../Vodka";

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  const [isHedin, setIsHedin] = useState<boolean>(false);
  return (
    <div className={styles.homeContainer}>
      <Welcome />
      {!isHedin ? <Vodka /> : <Login setIsHedin={setIsHedin} />}
      {/* //!change ! */}
    </div>
  );
};

export { HomeContainer };