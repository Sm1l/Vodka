import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HEDIN_ID } from "@/app/data/hedin";

import { loginWithFirebase } from "@/firebase/loginWithFirebase";
import { InputContainer } from "../InputContainer";
import styles from "./Form.module.scss";
import { Button } from "../Button";

export type TForm = {
  email: string;
  password: string;
};

interface FormProps {
  setIsHedin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = ({ setIsHedin }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TForm>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<TForm> = async (data) => {
    const result = await loginWithFirebase(data.email, data.password);
    if (result.error) {
      alert(`Ошибка: ${result.error}`);
    } else if (result.user) {
      console.log(result.user);
      if (result.user.uid === HEDIN_ID) {
        setIsHedin(true);
      }
    }
    reset();
  };

  return (
    <form className={styles.adminForm} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer
        inputName="Электронная почта"
        inputId="email"
        inputPlaceholder="Введите e-mail"
        autoComplete="on"
        inputType="email"
        register={register("email", {
          required: "Это поле обязательно",
          pattern: {
            value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
            message: "Введите корректный e-mail",
          },
        })}
        error={errors.email}
      />

      <InputContainer
        inputId="password"
        inputName="Пароль"
        inputPlaceholder="Введите пароль"
        autoComplete="current-password"
        inputType="password"
        register={register("password", {
          required: "Это поле обязательно",
          minLength: { value: 4, message: "Минимум 4 символа" },
        })}
        error={errors.password}
      />
      <Button type="submit" text="Войти" arrow={true} disabled={!isValid} />
    </form>
  );
};

export { Form };
