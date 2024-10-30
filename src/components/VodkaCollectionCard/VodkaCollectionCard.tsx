import React, { useState } from "react";

import styles from "./VodkaCollectionCard.module.scss";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";
import { CardButtonsContainer } from "../CardButtonsContainer";
import { dateToLocale } from "@/helpers/dateToLocale";
import { Modal } from "../Modal";

interface VodkaCollectionCardProps {
  vodka: TVodkaCollection;
  setCollectionIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const VodkaCollectionCard: React.FC<VodkaCollectionCardProps> = ({ vodka, setCollectionIsChanged }) => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const modalHandleClick = () => {
    setModalIsVisible(true);
  };
  return (
    <>
      <div className={styles.vodkaCollectionCard}>
        <div className={styles.vodkaInfo}>
          <div className={styles.infoContainer}>
            <p>{vodka.name}</p>
            <p>{dateToLocale(vodka.date)}</p>
          </div>
          <CardButtonsContainer vodka={vodka} setCollectionIsChanged={setCollectionIsChanged} />
        </div>

        <button className={styles.imageContainer} onClick={modalHandleClick}>
          <img src={vodka.imageUrl} className={styles.image} loading="lazy" alt="vodka image" />
        </button>
      </div>
      {modalIsVisible && (
        <Modal url={vodka.imageUrl} modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} />
      )}
    </>
  );
};

export { VodkaCollectionCard };
