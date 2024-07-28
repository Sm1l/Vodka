import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export const deleteDataFromFirebase = async (id: string): Promise<void> => {
  try {
    const docRef = doc(db, "vodka", id);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      console.error(`Vodka with id ${id} not found`);
      throw new Error(`Vodka with id ${id} not found`);
    }

    await deleteDoc(docRef);

    console.log(`Vodka with id ${id} deleted successfully`);
  } catch (error) {
    console.error("Error deleting vodka: ", error);
    throw error;
  }
};
