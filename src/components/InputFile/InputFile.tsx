import React, { useRef, useState } from "react";
import { saveImgToFirebase } from "@/firebase/saveImgToFirebase";
import styles from "./InputFile.module.scss";
import { Button } from "../Button";

interface InputFileProps {
  imageUrl: string;
  onFileUpload: (url: string) => void;
}

const InputFile: React.FC<InputFileProps> = ({ imageUrl, onFileUpload }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const fileInputCameraRef = useRef<HTMLInputElement | null>(null);

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

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleButtonCameraClick = () => {
    fileInputCameraRef.current?.click();
  };

  return (
    <div className={styles.inputFile}>
      <input
        type="file"
        ref={fileInputRef}
        className={styles.input}
        accept="image/*"
        onChange={handleChange}
        disabled={loading}
      />
      <input
        type="file"
        capture="environment"
        ref={fileInputCameraRef}
        className={styles.input}
        accept="image/*"
        onChange={handleChange}
        disabled={loading}
      />
      <Button type="button" arrow={false} disabled={loading} text="Выбрать изображение" onClick={handleButtonClick} />
      <Button type="button" arrow={false} disabled={loading} text="Сделать фото" onClick={handleButtonCameraClick} />
      {loading && <div className={styles.loader}>Загрузка...</div>}
      {imageUrl !== "" && (
        <div className={styles.imageContainer}>
          <img className={styles.image} src={imageUrl} alt="Uploaded image" />
        </div>
      )}
    </div>
  );
};

export { InputFile };
