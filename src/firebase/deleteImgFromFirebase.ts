import { getStorage, deleteObject, ref } from "firebase/storage";
import { getRelativePathFromUrl } from "@/helpers/getRelativePathFromUrl";

export const deleteImgFromFirebase = async (url: string) => {
  const storage = getStorage();
  const relativePath = getRelativePathFromUrl(url);

  try {
    const imageRef = ref(storage, relativePath);
    await deleteObject(imageRef);
    console.log("Картинка успешно удалена из Firebase Storage");
  } catch (error) {
    console.error("Ошибка при удалении картинки из Firebase Storage:", error);
  }
};
