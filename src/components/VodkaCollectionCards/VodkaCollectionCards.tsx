import React from "react";

import styles from "./VodkaCollectionCards.module.scss";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";
import { VodkaCollectionCard } from "../VodkaCollectionCard";

interface VodkaCollectionCardsProps {
  filteredVodkaCollection: TVodkaCollection[];
  setCollectionIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  controlButtons?: boolean;
}

const VodkaCollectionCards: React.FC<VodkaCollectionCardsProps> = ({
  filteredVodkaCollection,
  setCollectionIsChanged,
  controlButtons,
}) => {
  return (
    <div className={styles.vodkaCollectionCardsContainer}>
      <h3>
        Общее количество водочки: <span className={styles.vodkaCount}>{filteredVodkaCollection.length} </span>
      </h3>
      <div className={styles.vodkaCollectionCards}>
        {filteredVodkaCollection.length > 0 ? (
          <>
            {filteredVodkaCollection?.map((vodka) => (
              <VodkaCollectionCard
                vodka={vodka}
                key={vodka.id}
                setCollectionIsChanged={setCollectionIsChanged}
                controlButtons={controlButtons}
              />
            ))}
          </>
        ) : (
          <p>Коллекция водочки пока пуста!</p>
        )}
      </div>
    </div>
  );
};

export { VodkaCollectionCards };
