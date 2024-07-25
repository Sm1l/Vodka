"use client";
import React from "react";

import styles from "./Login.module.scss";
import { LoginForm } from "../LoginForm";

interface LoginProps {
  setIsHedin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsHedin }) => {
  return (
    <div className={styles.login}>
      <h3>Эй, погоди , сначала авторизуйся!</h3>
      <LoginForm setIsHedin={setIsHedin} />
    </div>
  );
};

export { Login };
