import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./NewVodkaForm.module.scss";
import { InputContainer } from "../InputContainer";
import { Button } from "../Button";
import { SelectContainer } from "../SelectContainer";
import { countries } from "@/app/data/countries";
import { TCountriesValues } from "@/app/data/countries";
import { saveDataToFirebase } from "@/firebase/saveDataToFirebase";
import { NewVodkaSent } from "../NewVodkaSent";

export type TVodkaForm = {
  id: string;
  brand: string;
  name?: string;
  producer: string;
  country: TCountriesValues;
  city: string;
};

interface NewVodkaFormProps {}

const NewVodkaForm: React.FC<NewVodkaFormProps> = () => {
  const [dataIsSent, setDataIsSent] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TVodkaForm>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<TVodkaForm> = async (data) => {
    const result = await saveDataToFirebase(data);
    if (result === true) {
      setDataIsSent(true);
    }
    reset();
  };

  return (
    <>
      {dataIsSent ? (
        <NewVodkaSent setDataIsSent={setDataIsSent} />
      ) : (
        <form className={styles.newVodkaForm} onSubmit={handleSubmit(onSubmit)}>
          <InputContainer
            inputName="Бренд"
            inputId="brand"
            inputPlaceholder="Введите название бренда"
            autoComplete="off"
            inputType="text"
            register={register("brand", {
              required: "Это поле обязательно",
              pattern: { value: /^[A-ZА-Я0-9][a-zA-Zа-яА-Я0-9]*$/, message: "Первая буква заглавная" },
            })}
            error={errors.brand}
          />
          <InputContainer
            inputName="Название"
            inputId="subbrand"
            inputPlaceholder="Введите название (необязательное поле)"
            autoComplete="off"
            inputType="text"
            register={register("name", {
              pattern: { value: /^[A-ZА-Я0-9][a-zA-Zа-яА-Я0-9]*$/, message: "Первая буква заглавная" },
            })}
            error={errors.name}
          />
          <InputContainer
            inputName="Изготовитель"
            inputId="producer"
            inputPlaceholder="Введите фирму изготовителя"
            autoComplete="off"
            inputType="text"
            register={register("producer", {
              required: "Это поле обязательно",
              minLength: { value: 4, message: "Минимум 4 символа" },
              pattern: { value: /^[A-ZА-Я0-9][a-zA-Zа-яА-Я0-9]*$/, message: "Первая буква заглавная" },
            })}
            error={errors.producer}
          />
          <SelectContainer inputId="country" inputName="Страна" register={register("country")} options={countries} />
          <InputContainer
            inputName="Город"
            inputId="city"
            inputPlaceholder="Введите город"
            autoComplete="off"
            inputType="text"
            register={register("city", {
              required: "Это поле обязательно",

              pattern: {
                value: /^[A-ZА-Я][a-zA-Zа-яА-Я]*(\s[a-zA-Zа-яА-Я]+)*$/,
                message: "Только буквы, первая заглавная",
              },
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
            error={errors.city}
          />
          <Button type="submit" text="Добавить" arrow={false} disabled={!isValid} />
        </form>
      )}
    </>
  );
};

export { NewVodkaForm };
