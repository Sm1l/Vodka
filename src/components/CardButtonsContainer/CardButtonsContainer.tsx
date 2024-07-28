import React from "react";

import styles from "./CardButtonsContainer.module.scss";
import { MdOutlineDelete, MdOutlineModeEdit } from "react-icons/md";
import { ButtonIcon } from "../ButtonIcon";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";

interface CardButtonsContainerProps {
  vodka: TVodkaCollection;
}

const CardButtonsContainer: React.FC<CardButtonsContainerProps> = ({ vodka }) => {
  const vodkaId = vodka.id;
  const handleButtonDeleteClick = () => {
    console.log("Удалить водку с id:", vodkaId);
  };
  const handleButtonEditClick = () => {
    console.log("Редактировать водку с id:", vodkaId);
  };
  return (
    <div className={styles.cardButtonsContainer}>
      <ButtonIcon icon={MdOutlineDelete} onClick={handleButtonDeleteClick} />
      <ButtonIcon icon={MdOutlineModeEdit} onClick={handleButtonEditClick} />
    </div>
  );
};

export { CardButtonsContainer };
