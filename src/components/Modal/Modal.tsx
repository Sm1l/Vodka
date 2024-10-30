import React, { useEffect } from "react";

import styles from "./Modal.module.scss";

import { MdClose } from "react-icons/md";
import { ButtonIcon } from "../ButtonIcon";

interface ModalProps {
  url: string;
  modalIsVisible: boolean;
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ url, modalIsVisible, setModalIsVisible }) => {
  const closeModalHandleClick = () => {
    setModalIsVisible(false);
  };

  //*disable scroll
  useEffect(() => {
    if (modalIsVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsVisible]);

  //*close modal "Escape"
  useEffect(() => {
    const escCloseModal = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeModalHandleClick();
      }
    };
    if (modalIsVisible) {
      window.addEventListener("keydown", escCloseModal);
    }
    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  }, [modalIsVisible]);

  return (
    <div className={styles.overlay} tabIndex={0} aria-label="close modal" onClick={closeModalHandleClick}>
      <div className={styles.container} onClick={(e: React.SyntheticEvent<EventTarget>) => e.stopPropagation()}>
        <div className={styles.close}>
          <ButtonIcon icon={MdClose} color="red" onClick={closeModalHandleClick} />
        </div>
        <div className={styles.imageContainer}>
          <img src={url} className={styles.image} loading="lazy" alt="vodka image" />
        </div>
      </div>
    </div>
  );
};

export { Modal };
