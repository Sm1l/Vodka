import React from "react";

import styles from "./NewVodka.module.scss";
import { NewVodkaForm } from "../NewVodkaForm";

interface NewVodkaProps {}

const NewVodka: React.FC<NewVodkaProps> = () => {
  return (
    <div className={styles.newVodka}>
      <h3>Добавить новую водочку</h3>
      <NewVodkaForm />
    </div>
  );
};

export { NewVodka };
