import React, { useEffect } from "react";

import styles from "./EditNameModal.module.scss";

import { MdClose } from "react-icons/md";
import { ButtonIcon } from "../ButtonIcon";
import { InputContainer } from "../InputContainer";

import { SubmitHandler, useForm } from "react-hook-form";
import { editNameInFirebase } from "@/firebase/editNameinFirebase";
import { Button } from "../Button";

interface EditNameModalProps {
  id: string;
  name: string;
  editNameModal: boolean;
  setEditNameModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCollectionIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

type TEditName = {
  newName: string;
};

const EditNameModal: React.FC<EditNameModalProps> = ({
  id,
  name,
  editNameModal,
  setEditNameModal,
  setCollectionIsChanged,
}) => {
  const closeModalHandleClick = () => {
    setEditNameModal(false);
  };

  //*disable scroll
  useEffect(() => {
    if (editNameModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [editNameModal]);

  //*close modal "Escape"
  useEffect(() => {
    const escCloseModal = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeModalHandleClick();
      }
    };
    if (editNameModal) {
      window.addEventListener("keydown", escCloseModal);
    }
    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  }, [editNameModal]);

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors, isValid },
  } = useForm<TEditName>({ mode: "onBlur" });

  useEffect(() => {
    setValue("newName", name);
  }, [name, setValue]);

  useEffect(() => {
    setFocus("newName");
  }, [setFocus]);

  const onSubmit: SubmitHandler<TEditName> = async (data) => {
    const result = await editNameInFirebase(id, data.newName);
    if (result === true) {
      setEditNameModal(false);
      setCollectionIsChanged((state) => !state);
      console.log("Поле 'name' успешно обновлено");
    } else {
      console.error(result.error);
    }
  };

  return (
    <div className={styles.overlay} tabIndex={0} aria-label="close modal" onClick={closeModalHandleClick}>
      <div className={styles.container} onClick={(e: React.SyntheticEvent<EventTarget>) => e.stopPropagation()}>
        <div className={styles.close}>
          <ButtonIcon icon={MdClose} color="red" onClick={closeModalHandleClick} />
        </div>
        <form className={styles.newVodkaForm} onSubmit={handleSubmit(onSubmit)}>
          <InputContainer
            inputName="Новое название"
            autoComplete="off"
            inputId="newName"
            inputType="text"
            inputPlaceholder="Введите новое название"
            register={register("newName", { required: "Название обязательно" })}
            error={errors.newName}
          />
          <Button text="Сохранить" type="submit" disabled={!isValid} />
        </form>
      </div>
    </div>
  );
};

export { EditNameModal };
