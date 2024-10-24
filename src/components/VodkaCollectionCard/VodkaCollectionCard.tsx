import React from "react";

import styles from "./VodkaCollectionCard.module.scss";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";
import { CardButtonsContainer } from "../CardButtonsContainer";
import { dateToLocale } from "@/helpers/dateToLocale";

interface VodkaCollectionCardProps {
  vodka: TVodkaCollection;
  setCollectionIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const VodkaCollectionCard: React.FC<VodkaCollectionCardProps> = ({ vodka, setCollectionIsChanged }) => {
  return (
    <div className={styles.vodkaCollectionCard}>
      <div className={styles.vodkaInfo}>
        <div className={styles.infoContainer}>
          <p>
            {/* <span className={styles.miniTitle}>Название: </span> */}
            {vodka.name}
          </p>
          <p>
            {/* <span className={styles.miniTitle}>Изменено: </span> */}
            {dateToLocale(vodka.date)}
          </p>
        </div>
        <CardButtonsContainer vodka={vodka} setCollectionIsChanged={setCollectionIsChanged} />
      </div>

      <div className={styles.imageContainer}>
        <img src={vodka.imageUrl} className={styles.image} loading="lazy" alt="vodka image" />
      </div>
    </div>
  );
};

export { VodkaCollectionCard };
