import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styles from "./InputContainer.module.scss";

interface InputContainerProps {
  inputName: string;
  inputId: string;
  inputType: "email" | "password" | "text" | "number";
  inputPlaceholder: string;
  autoComplete: "off" | "on" | "current-password";
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const InputContainer: React.FC<InputContainerProps> = ({
  inputName,
  inputId,
  inputType,
  inputPlaceholder,
  autoComplete,
  register,
  error,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={inputId}>{inputName}</label>
      <input
        className={error ? `${styles.input} ${styles.inputError}` : styles.input}
        id={inputId}
        type={inputType}
        placeholder={inputPlaceholder}
        autoComplete={autoComplete}
        {...register}
      />
      <div className={styles.error}>{error && <span>{error?.message ?? "Ошибка"}</span>}</div>
    </div>
  );
};

export { InputContainer };
