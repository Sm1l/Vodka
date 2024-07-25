import React from "react";

import styles from "./NewVodkaSent.module.scss";
import { Button } from "../Button";

interface NewVodkaSentProps {
  setDataIsSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewVodkaSent: React.FC<NewVodkaSentProps> = ({ setDataIsSent }) => {
  return (
    <div className={styles.newVodkaSent}>
      <h3>Твоя водочка успешно добавлена!</h3>
      <Button
        type="button"
        arrow={false}
        text="Добавить новую водочку"
        onClick={() => {
          setDataIsSent(false);
        }}
      />
    </div>
  );
};

export { NewVodkaSent };
