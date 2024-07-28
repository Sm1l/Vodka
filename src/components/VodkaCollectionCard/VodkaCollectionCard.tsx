import React from "react";

import styles from "./VodkaCollectionCard.module.scss";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";
import { CardButtonsContainer } from "../CardButtonsContainer";

interface VodkaCollectionCardProps {
  vodka: TVodkaCollection;
  setCollectionIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const VodkaCollectionCard: React.FC<VodkaCollectionCardProps> = ({ vodka, setCollectionIsChanged }) => {
  const dateToLocale = (date: number) => {
    const dateObject = new Date(date);
    return dateObject.toLocaleString("ru-RU", {
      day: "numeric",
      month: "2-digit",
      year: "numeric",
    });
  };
  return (
    <div className={styles.vodkaCollectionCard}>
      <div className={styles.vodkaInfo}>
        <p>
          <span className={styles.miniTitle}>Бренд: </span>
          {vodka.brand}
        </p>
        {vodka.name && (
          <p>
            <span className={styles.miniTitle}>Название: </span>
            {vodka.name}
          </p>
        )}
        <p>
          <span className={styles.miniTitle}>Изготовитель: </span>
          {vodka.producer}, {vodka.country}, {vodka.city}
        </p>
        <p>
          <span className={styles.miniTitle}>Изменено: </span>
          {dateToLocale(vodka.date)}
        </p>
      </div>
      <CardButtonsContainer vodka={vodka} setCollectionIsChanged={setCollectionIsChanged} />
    </div>
  );
};

export { VodkaCollectionCard };
