import React, { useState } from "react";

import { TVodkaCollection } from "@/firebase/saveDataToFirebase";
import { dateToLocale } from "@/helpers/dateToLocale";
import { CardButtonsContainer } from "../CardButtonsContainer";
import { Modal } from "../Modal";
import styles from "./VodkaCollectionCard.module.scss";

interface VodkaCollectionCardProps {
  vodka: TVodkaCollection;
  setCollectionIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  controlButtons?: boolean;
}

const VodkaCollectionCard: React.FC<VodkaCollectionCardProps> = ({
  vodka,
  setCollectionIsChanged,
  controlButtons = true,
}) => {
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
            {controlButtons && <p>{dateToLocale(vodka.date)}</p>}
          </div>
          {controlButtons && <CardButtonsContainer vodka={vodka} setCollectionIsChanged={setCollectionIsChanged} />}
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
