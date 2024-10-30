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
      <h2>Хедин, это ты?</h2>
      <LoginForm setIsHedin={setIsHedin} />
    </div>
  );
};

export { Login };
