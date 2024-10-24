import React, { useState } from "react";

import styles from "./CardButtonsContainer.module.scss";
import { MdOutlineDelete, MdDone, MdClose } from "react-icons/md";
import { ButtonIcon } from "../ButtonIcon";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";
import { deleteDataFromFirebase } from "@/firebase/deleteDataFromFirebase";
import { deleteImgFromFirebase } from "@/firebase/deleteImgFromFirebase";

interface CardButtonsContainerProps {
  vodka: TVodkaCollection;
  setCollectionIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardButtonsContainer: React.FC<CardButtonsContainerProps> = ({ vodka, setCollectionIsChanged }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const handleButtonDeleteClick = async (id: string) => {
    console.log("Удалить водку с id:", vodka.id, "url:", vodka.imageUrl);
    await deleteImgFromFirebase(vodka.imageUrl);
    await deleteDataFromFirebase(id);
    setDeleteModal(false);
    setCollectionIsChanged((state) => !state);
  };

  return (
    <div className={styles.cardButtonsContainer}>
      <ButtonIcon icon={MdOutlineDelete} onClick={() => setDeleteModal(true)} />
      {deleteModal && (
        <div className={styles.deleteModal}>
          <ButtonIcon icon={MdDone} color="red" onClick={() => handleButtonDeleteClick(vodka.id)} />
          <ButtonIcon icon={MdClose} color="lightgreen" onClick={() => setDeleteModal(false)} />
        </div>
      )}
    </div>
  );
};

export { CardButtonsContainer };
