import React, { useEffect, useState } from "react";

import styles from "./VodkaCollection.module.scss";
import { getDataFromFirebase } from "@/firebase/getDataFromFirebase";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";
import { VodkaCollectionCards } from "../VodkaCollectionCards";
import { VodkaControlPanel } from "../VodkaControlPanel";
interface VodkaCollectionProps {}

const VodkaCollection: React.FC<VodkaCollectionProps> = () => {
  const [vodkaCollection, setVodkaCollection] = useState<TVodkaCollection[] | []>([]);
  const [sortedVodkaCollection, setSortedVodkaCollection] = useState<TVodkaCollection[] | []>([]);
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

  return (
    <div className={styles.vodkaCollection}>
      <h3>Моя коллекция водочки!</h3>

      {loading ? (
        <p>Подожди немного, я уже загружаю твою коллекцию водочки...</p>
      ) : (
        <>
          <VodkaControlPanel vodkaCollection={vodkaCollection} setSortedVodkaCollection={setSortedVodkaCollection} />
          <VodkaCollectionCards
            setCollectionIsChanged={setCollectionIsChanged}
            vodkaCollection={sortedVodkaCollection}
          />
        </>
      )}
    </div>
  );
};

export { VodkaCollection };
