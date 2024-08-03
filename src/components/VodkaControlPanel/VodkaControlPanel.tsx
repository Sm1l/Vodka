import React from "react";

import styles from "./VodkaControlPanel.module.scss";
import { SearchVodka } from "../SearchVodka";
import { SortVodka } from "../SortVodka";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";

interface VodkaControlPanelProps {
  vodkaCollection: TVodkaCollection[];
  sortedVodkaCollection: TVodkaCollection[];
  setSortedVodkaCollection: React.Dispatch<React.SetStateAction<TVodkaCollection[] | []>>;
  setFilteredVodkaCollection: React.Dispatch<React.SetStateAction<TVodkaCollection[] | []>>;
}

const VodkaControlPanel: React.FC<VodkaControlPanelProps> = ({
  vodkaCollection,
  sortedVodkaCollection,
  setSortedVodkaCollection,
  setFilteredVodkaCollection,
}) => {
  return (
    <>
      {vodkaCollection.length > 0 && (
        <div className={styles.vodkaControlPanel}>
          <SearchVodka
            sortedVodkaCollection={sortedVodkaCollection}
            setFilteredVodkaCollection={setFilteredVodkaCollection}
          />
          <SortVodka vodkaCollection={vodkaCollection} setSortedVodkaCollection={setSortedVodkaCollection} />
        </div>
      )}
    </>
  );
};

export { VodkaControlPanel };
