import { doc, setDoc } from "firebase/firestore";
import { TVodkaForm } from "../components/NewVodkaForm";
import { db } from "./firebase";
import { nanoid } from "nanoid";

export type TVodkaCollection = TVodkaForm & { id: string; date: number; isEdited: boolean };

export const saveDataToFirebase = async (data: TVodkaForm): Promise<true | { error: string }> => {
  try {
    const newId: string = nanoid();
    const docRef = doc(db, "vodka", newId);

    const vodkaData: TVodkaCollection = {
      id: newId,
      // brand: data.brand,
      name: data.name,
      date: Date.now(),
      // producer: data.producer,
      // country: data.country,
      imageUrl: data.imageUrl,
      // city: data.city,
      isEdited: false,
    };

    await setDoc(docRef, vodkaData, { merge: true });
    console.log("Данные успешно отправлены");
    return true;
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message || "Неизвестная ошибка";
      return { error: errorMessage };
    }
    return { error: "Неизвестная ошибка" };
  }
};
