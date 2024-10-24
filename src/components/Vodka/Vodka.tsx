import React, { useState } from "react";

import styles from "./Vodka.module.scss";
import { NewVodka } from "../NewVodka";
import { VodkaCollection } from "../VodkaCollection/VodkaCollection";
import { ToggleSwitch } from "../ToggleSwitch";

export type TScreen = "collection" | "new";

interface VodkaProps {}

const Vodka: React.FC<VodkaProps> = () => {
  const [screen, setScreen] = useState<TScreen>("collection");
  return (
    <section className={styles.vodka}>
      <div className={styles.vodkaWelcome}>
        <h1 className={styles.title}>Водочка Хедина</h1>
        <ToggleSwitch leftLabel="Коллекция" rightLabel="Добавить" screen={screen} setScreen={setScreen} />
      </div>
      {screen === "collection" ? <VodkaCollection /> : <NewVodka />}
    </section>
  );
};

export { Vodka };
