import React, { useState } from "react";
import { saveImgToFirebase } from "@/firebase/saveImgToFirebase";
import styles from "./InputFile.module.scss";

interface InputFileProps {
  imageUrl: string;
  onFileUpload: (url: string) => void;
}

const InputFile: React.FC<InputFileProps> = ({ imageUrl, onFileUpload }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    console.log("Выбран файл:", selectedFile);

    if (selectedFile) {
      setLoading(true);

      try {
        const url = await saveImgToFirebase(selectedFile);
        onFileUpload(url);
        console.log("Файл загружен! URL:", url);
      } catch (error) {
        console.error("Ошибка при загрузке файла:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.inputFile}>
      <input type="file" className={styles.input} accept="image/*" onChange={handleChange} disabled={loading} />
      {loading && <div className={styles.loader}>Загрузка...</div>}
      {imageUrl !== "" && <img className={styles.image} src={imageUrl} alt="Uploaded image" />}
    </div>
  );
};

export { InputFile };
