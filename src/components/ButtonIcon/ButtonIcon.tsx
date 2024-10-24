import React, { ComponentProps } from "react";
import { IconType } from "react-icons";

import styles from "./ButtonIcon.module.scss";

type TColor = "green" | "red" | "lightgreen";

interface ButtonIconProps extends ComponentProps<"button"> {
  icon: IconType;
  color?: TColor;
}
const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: Icon, color = "green", ...props }) => {
  const chooseColor = (color: TColor): string => {
    switch (color) {
      case "green":
        return "#1d5f4d";
      case "red":
        return "#e84749";
      case "lightgreen":
        return "#59cbac";
    }
  };

  return (
    <button className={`${styles.buttonIcon} ${styles[color]}`} {...props}>
      <Icon color={chooseColor(color)} />
    </button>
  );
};

export { ButtonIcon };
