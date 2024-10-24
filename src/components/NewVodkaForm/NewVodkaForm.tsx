import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./NewVodkaForm.module.scss";
import { InputContainer } from "../InputContainer";
import { Button } from "../Button";
// import { SelectContainer } from "../SelectContainer";
// import { countries } from "@/app/data/countries";
// import { TCountriesValues } from "@/app/data/countries";
import { saveDataToFirebase } from "@/firebase/saveDataToFirebase";
import { NewVodkaSent } from "../NewVodkaSent";
import { InputFile } from "../InputFile";
import { REG_EXP_FIRST_LETTER_CAPITAL } from "@/helpers/regexp";

export type TVodkaForm = {
  id: string;
  name: string;
  imageUrl: string;
  // brand: string;
  // producer: string;
  // country: TCountriesValues;
  // city: string;
};

interface NewVodkaFormProps {}

const NewVodkaForm: React.FC<NewVodkaFormProps> = () => {
  const [dataIsSent, setDataIsSent] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<TVodkaForm>({ mode: "onBlur" });

  const handleFileUpload = (url: string) => {
    setImageUrl(url);
    setValue("imageUrl", url);
  };

  const onSubmit: SubmitHandler<TVodkaForm> = async (data) => {
    setIsSubmitting(true);
    const result = await saveDataToFirebase({ ...data, imageUrl });
    if (result === true) {
      setDataIsSent(true);
    }
    reset();
    setImageUrl("");
    setIsSubmitting(false);
  };

  return (
    <>
      {dataIsSent ? (
        <NewVodkaSent setDataIsSent={setDataIsSent} />
      ) : (
        <form className={styles.newVodkaForm} onSubmit={handleSubmit(onSubmit)}>
          <InputContainer
            inputName="Название"
            inputId="name"
            inputPlaceholder="Введите название"
            autoComplete="off"
            inputType="text"
            register={register("name", {
              required: "Это поле обязательно",
              pattern: { value: REG_EXP_FIRST_LETTER_CAPITAL, message: "Первая буква заглавная" },
            })}
            error={errors.name}
          />
          <InputFile onFileUpload={handleFileUpload} imageUrl={imageUrl} />
          {errors.imageUrl && <p className={styles.error}>Изображение обязательно!</p>}
          <Button
            type="submit"
            text={isSubmitting ? "Загрузка..." : "Добавить"}
            arrow={false}
            disabled={!isValid || !imageUrl || isSubmitting}
          />
          {/* <InputContainer
            inputName="Название"
            inputId="subbrand"
            inputPlaceholder="Введите название (необязательное поле)"
            autoComplete="off"
            inputType="text"
            register={register("name", {
              pattern: { value: REG_EXP_FIRST_LETTER_CAPITAL, message: "Первая буква заглавная" },
            })}
            error={errors.name}
          /> */}
          {/* <InputContainer
            inputName="Изготовитель"
            inputId="producer"
            inputPlaceholder="Введите фирму изготовителя"
            autoComplete="off"
            inputType="text"
            register={register("producer", {
              required: "Это поле обязательно",
              minLength: { value: 4, message: "Минимум 4 символа" },
              pattern: { value: REG_EXP_FIRST_LETTER_CAPITAL, message: "Первая буква заглавная" },
            })}
            error={errors.producer}
          /> */}
          {/* <SelectContainer inputId="country" inputName="Страна" register={register("country")} options={countries} /> */}
          {/* <InputContainer
            inputName="Город"
            inputId="city"
            inputPlaceholder="Введите город"
            autoComplete="off"
            inputType="text"
            register={register("city", {
              required: "Это поле обязательно",

              pattern: {
                value: REG_EXP_FIRST_LETTER_CAPITAL_ONLY_LETTERS,
                message: "Только буквы, первая заглавная",
              },
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
            error={errors.city}
          /> */}
        </form>
      )}
    </>
  );
};

export { NewVodkaForm };
