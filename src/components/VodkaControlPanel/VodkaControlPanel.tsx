import React from "react";

import styles from "./VodkaControlPanel.module.scss";
import { SearchVodka } from "../SearchVodka";
import { SortVodka } from "../SortVodka";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";

interface VodkaControlPanelProps {
  vodkaCollection: TVodkaCollection[];
  setSortedVodkaCollection: React.Dispatch<React.SetStateAction<TVodkaCollection[] | []>>;
}

const VodkaControlPanel: React.FC<VodkaControlPanelProps> = ({ vodkaCollection, setSortedVodkaCollection }) => {
  return (
    <>
      {vodkaCollection.length > 0 && (
        <div className={styles.vodkaControlPanel}>
          <SearchVodka />
          <SortVodka vodkaCollection={vodkaCollection} setSortedVodkaCollection={setSortedVodkaCollection} />
        </div>
      )}
    </>
  );
};

export { VodkaControlPanel };
