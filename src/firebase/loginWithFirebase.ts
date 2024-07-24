import { auth } from "./firebase";
import { signInWithEmailAndPassword, User } from "firebase/auth";

type TLoginWithFirebase = (email: string, password: string) => Promise<TLoginWithFirebaseResult>;

type TLoginWithFirebaseResult = {
  user?: User;
  error?: string;
};

export const loginWithFirebase: TLoginWithFirebase = async (email, password): Promise<TLoginWithFirebaseResult> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return { user };
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message || "Неизвестная ошибка";
      return { error: errorMessage };
    }
    return { error: "Неизвестная ошибка" };
  }
};
