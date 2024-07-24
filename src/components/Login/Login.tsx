"use client";
import React from "react";

import styles from "./Login.module.scss";
import { Form } from "../Form";

interface LoginProps {
  setIsHedin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsHedin }) => {
  return (
    <div className={styles.login}>
      <h3>Эй, погоди, сначала авторизуйся!</h3>
      <Form setIsHedin={setIsHedin} />
    </div>
  );
};

export { Login };
