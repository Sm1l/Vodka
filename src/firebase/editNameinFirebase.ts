import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const editNameInFirebase = async (id: string, newName: string): Promise<true | { error: string }> => {
  try {
    const docRef = doc(db, "vodka", id);

    await updateDoc(docRef, {
      name: newName,
    });

    console.log("Поле 'name' успешно обновлено");
    return true;
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message || "Неизвестная ошибка";
      return { error: errorMessage };
    }
    return { error: "Неизвестная ошибка" };
  }
};
