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
        {/* <p>
          <span className={styles.miniTitle}>Бренд: </span>
          {vodka.brand}
        </p> */}
        {vodka.name && (
          <p>
            <span className={styles.miniTitle}>Название: </span>
            {vodka.name}
          </p>
        )}
        {/* <p>
          <span className={styles.miniTitle}>Изготовитель: </span>
          {vodka.producer}, {vodka.country}, {vodka.city}
        </p> */}
        <p>
          <span className={styles.miniTitle}>Изменено: </span>
          {dateToLocale(vodka.date)}
        </p>
        {vodka.imageUrl && (
          <div>
            <img src={vodka.imageUrl} className={styles.image} loading="lazy" alt="vodka image" />
          </div>
        )}
      </div>
      <CardButtonsContainer vodka={vodka} setCollectionIsChanged={setCollectionIsChanged} />
    </div>
  );
};

export { VodkaCollectionCard };
