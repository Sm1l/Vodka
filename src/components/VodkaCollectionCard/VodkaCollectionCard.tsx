import React from "react";

import styles from "./VodkaCollectionCard.module.scss";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";

interface VodkaCollectionCardProps {
  vodka: TVodkaCollection;
}

const VodkaCollectionCard: React.FC<VodkaCollectionCardProps> = ({ vodka }) => {
  return (
    <div className={styles.vodkaCollectionCard}>
      <div className={styles.vodka} key={vodka.id}>
        <p>{vodka.brand}</p>
      </div>
    </div>
  );
};

export { VodkaCollectionCard };
