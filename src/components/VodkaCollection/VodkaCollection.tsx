import React, { useEffect, useState } from "react";

import styles from "./VodkaCollection.module.scss";
import { getDataFromFirebase } from "@/firebase/getDataFromFirebase";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";
import { VodkaCollectionCard } from "../VodkaCollectionCard";
interface VodkaCollectionProps {}

const VodkaCollection: React.FC<VodkaCollectionProps> = () => {
  const [vodkaCollection, setVodkaCollection] = useState<TVodkaCollection[] | []>([]);
  const [loading, setLoading] = useState(true);
  const getVodkaCollection = async () => {
    try {
      const res = await getDataFromFirebase();
      if (res && res?.length > 0) {
        setVodkaCollection(res);
        setLoading(false);
        console.log("Коллекция водки получена");
      } else {
        console.log("Коллекция водки пуста");
      }
    } catch (error) {
      console.error("Ошибка при получении коллекции водки:", error);
    }
  };

  useEffect(() => {
    getVodkaCollection();
  }, []);
  console.log(vodkaCollection);

  return (
    <div className={styles.vodkaCollection}>
      <h3>Моя водочка!</h3>
      {loading ? (
        <p>Подожди немного, я уже загружаю твою коллекцию водочки...</p>
      ) : (
        <div className={styles.vodkaCollectionCards}>
          {vodkaCollection?.map((vodka) => (
            <VodkaCollectionCard vodka={vodka} key={vodka.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export { VodkaCollection };
