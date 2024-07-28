import React, { ComponentProps } from "react";
import { IconType } from "react-icons";

import styles from "./ButtonIcon.module.scss";

interface ButtonIconProps extends ComponentProps<"button"> {
  icon: IconType;
  color?: "white" | "red" | "green";
}
const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: Icon, color = "white", ...props }) => {
  return (
    <button className={`${styles.buttonIcon} ${styles[color]}`} {...props}>
      <Icon color={"#0a08af"} />
    </button>
  );
};

export { ButtonIcon };
