import React, { useState } from "react";

import styles from "./Vodka.module.scss";
import { NewVodka } from "../NewVodka";
import { VodkaCollection } from "../VodkaCollection/VodkaCollection";

interface VodkaProps {}

const Vodka: React.FC<VodkaProps> = () => {
  const [screen, setScreen] = useState<"collection" | "new">("collection");
  return (
    <section className={styles.vodka}>
      <div>
        <input
          type="checkbox"
          id="vodka_checkbox"
          onChange={() => setScreen(screen === "collection" ? "new" : "collection")}
          checked={screen === "collection"}
          name="vodka_checkbox"
        />
      </div>
      {screen === "collection" ? <VodkaCollection /> : <NewVodka />}
    </section>
  );
};

export { Vodka };
