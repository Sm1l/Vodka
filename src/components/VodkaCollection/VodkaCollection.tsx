import React, { useEffect, useState } from "react";

import styles from "./VodkaCollection.module.scss";
import { getDataFromFirebase } from "@/firebase/getDataFromFirebase";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";
import { VodkaCollectionCard } from "../VodkaCollectionCard";
interface VodkaCollectionProps {}

const VodkaCollection: React.FC<VodkaCollectionProps> = () => {
  const [vodkaCollection, setVodkaCollection] = useState<TVodkaCollection[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [collectionIsChanged, setCollectionIsChanged] = useState<boolean>(false);
  const getVodkaCollection = async () => {
    try {
      const res = await getDataFromFirebase();
      if (res && res?.length > 0) {
        setVodkaCollection(res);
        console.log("Коллекция водки получена");
      } else {
        console.log("Коллекция водки пуста");
        setVodkaCollection([]);
      }
    } catch (error) {
      console.error("Ошибка при получении коллекции водки:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVodkaCollection();
  }, [collectionIsChanged]);

  let collectionCards;
  if (vodkaCollection.length > 0) {
    collectionCards = (
      <div className={styles.vodkaCollectionCards}>
        {vodkaCollection?.map((vodka) => (
          <VodkaCollectionCard vodka={vodka} key={vodka.id} setCollectionIsChanged={setCollectionIsChanged} />
        ))}
      </div>
    );
  } else {
    collectionCards = <div>Коллекция водочки пока пуста!</div>;
  }

  return (
    <div className={styles.vodkaCollection}>
      <h3>Моя коллекция водочки!</h3>
      {loading ? <p>Подожди немного, я уже загружаю твою коллекцию водочки...</p> : collectionCards}
    </div>
  );
};

export { VodkaCollection };
