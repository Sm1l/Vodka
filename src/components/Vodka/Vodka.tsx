import React, { useState } from "react";

import styles from "./Vodka.module.scss";
import { NewVodka } from "../NewVodka";
import { VodkaCollection } from "../VodkaCollection/VodkaCollection";

interface VodkaProps {}

const Vodka: React.FC<VodkaProps> = () => {
  const [screen, setScreen] = useState<"table" | "new">("table");
  return (
    <section className={styles.vodka}>
      <div>
        <input
          type="checkbox"
          id="vodka_checkbox"
          onChange={() => setScreen(screen === "table" ? "new" : "table")}
          checked={screen === "table"}
          name="vodka_checkbox"
        />
      </div>
      {screen === "table" ? <VodkaCollection /> : <NewVodka />}
    </section>
  );
};

export { Vodka };
