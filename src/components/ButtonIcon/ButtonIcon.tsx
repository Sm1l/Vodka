import React, { ComponentProps } from "react";
import { IconType } from "react-icons";

import styles from "./ButtonIcon.module.scss";

interface ButtonIconProps extends ComponentProps<"button"> {
  icon: IconType;
}
const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: Icon, ...props }) => {
  return (
    <button className={styles.buttonIcon} {...props}>
      <Icon color={"#0a08af"} />
    </button>
  );
};

export { ButtonIcon };
