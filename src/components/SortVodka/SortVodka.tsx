import React, { useEffect, useState } from "react";
import styles from "./SortVodka.module.scss";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";

interface SortVodkaProps {
  vodkaCollection: TVodkaCollection[];
  setSortedVodkaCollection: React.Dispatch<React.SetStateAction<TVodkaCollection[] | []>>;
}

type TSortOrder = "asc" | "desc";
type TOptionValues = "name-asc" | "name-desc" | "date-asc" | "date-desc";
type TOptionNames =
  | "названию (по возрастанию)"
  | "названию (по убыванию)"
  | "дате (по возрастанию)"
  | "дате (по убыванию)";

const SortVodka: React.FC<SortVodkaProps> = ({ vodkaCollection, setSortedVodkaCollection }) => {
  const [sortOption, setSortOption] = useState<TOptionValues>("name-asc");

  const options: { name: TOptionNames; value: TOptionValues }[] = [
    { name: "названию (по возрастанию)", value: "name-asc" },
    { name: "названию (по убыванию)", value: "name-desc" },
    { name: "дате (по возрастанию)", value: "date-asc" },
    { name: "дате (по убыванию)", value: "date-desc" },
  ];

  const sortVodkaCollection = (key: keyof TVodkaCollection, order: TSortOrder) => {
    const sorted = vodkaCollection.toSorted((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (aValue !== undefined && bValue !== undefined) {
        if (aValue < bValue) {
          return order === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return order === "asc" ? 1 : -1;
        }
      }
      return 0;
    });

    setSortedVodkaCollection(sorted);
  };

  useEffect(() => {
    const [key, order] = sortOption.split("-") as [keyof TVodkaCollection, TSortOrder];
    sortVodkaCollection(key, order);
  }, [sortOption, vodkaCollection]);

  return (
    <div className={styles.sortVodka}>
      <label htmlFor="sort">по: </label>
      <select
        className={styles.select}
        id="sort"
        onChange={(e) => setSortOption(e.target.value as TOptionValues)}
        value={sortOption}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export { SortVodka };
