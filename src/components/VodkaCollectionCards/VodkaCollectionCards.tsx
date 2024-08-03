import React from "react";

import styles from "./VodkaCollectionCards.module.scss";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";
import { VodkaCollectionCard } from "../VodkaCollectionCard";

interface VodkaCollectionCardsProps {
  filteredVodkaCollection: TVodkaCollection[];
  setCollectionIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const VodkaCollectionCards: React.FC<VodkaCollectionCardsProps> = ({
  filteredVodkaCollection,
  setCollectionIsChanged,
}) => {
  return (
    <div className={styles.vodkaCollectionCards}>
      {filteredVodkaCollection.length > 0 ? (
        <>
          {filteredVodkaCollection?.map((vodka) => (
            <VodkaCollectionCard vodka={vodka} key={vodka.id} setCollectionIsChanged={setCollectionIsChanged} />
          ))}
        </>
      ) : (
        <p>Коллекция водочки пока пуста!</p>
      )}
    </div>
  );
};

export { VodkaCollectionCards };
