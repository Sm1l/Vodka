import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TCountriesPairs } from "@/app/data/countries";

import styles from "./SelectContainer.module.scss";

interface SelectContainerProps {
  inputName: string;
  inputId: string;
  options: TCountriesPairs[];
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const SelectContainer: React.FC<SelectContainerProps> = ({ inputId, inputName, register, error, options }) => {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={inputId}>{inputName}</label>
      <select className={`${styles.select} ${error ? styles.selectError : null}`} {...register} id={inputId}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <div className={styles.error}>{error && <span>{error?.message ?? "Ошибка"}</span>}</div>
    </div>
  );
};

export { SelectContainer };
