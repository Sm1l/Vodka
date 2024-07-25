import { collection, getDocs } from "firebase/firestore";
import { TVodkaCollection } from "./saveDataToFirebase";
import { db } from "./firebase";

export const getDataFromFirebase = async (): Promise<TVodkaCollection[] | null> => {
  try {
    const querySnapshot = await getDocs(collection(db, "vodka"));
    const vodkaCollection: TVodkaCollection[] = [];
    querySnapshot.forEach((doc) => {
      vodkaCollection.push(doc.data() as TVodkaCollection);
    });
    return vodkaCollection;
  } catch (error) {
    console.error("Ошибка при получении данных: ", error);
    return null;
  }
};
