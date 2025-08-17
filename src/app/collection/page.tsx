"use client";
import { VodkaCollection } from "@/components/VodkaCollection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.collection}>
      <h1 className={styles.title}>Коллекция водочки Хедина</h1>
      <p>Лучше проверь, что уже есть в коллекции Хедина!</p>
      <VodkaCollection controlButtons={false} />
    </div>
  );
}
