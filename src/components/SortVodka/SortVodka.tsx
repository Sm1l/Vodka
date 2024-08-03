import React, { useEffect, useState } from "react";

import styles from "./SortVodka.module.scss";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";

interface SortVodkaProps {
  vodkaCollection: TVodkaCollection[];
  setSortedVodkaCollection: React.Dispatch<React.SetStateAction<TVodkaCollection[] | []>>;
}
type TSortOrder = "asc" | "desc";
type TOptionValues = "brand-asc" | "brand-desc" | "producer-asc" | "producer-desc";
type TOptionNames =
  | "бренду (по возрастанию)"
  | "бренду (по убыванию)"
  | "изготовителю (по возрастанию)"
  | "изготовителю (по убыванию)";

const SortVodka: React.FC<SortVodkaProps> = ({ vodkaCollection, setSortedVodkaCollection }) => {
  const [sortOption, setSortOption] = useState<TOptionValues>("brand-asc");
  const options: { name: TOptionNames; value: TOptionValues }[] = [
    { name: "бренду (по возрастанию)", value: "brand-asc" },
    { name: "бренду (по убыванию)", value: "brand-desc" },
    { name: "изготовителю (по возрастанию)", value: "producer-asc" },
    { name: "изготовителю (по убыванию)", value: "producer-desc" },
  ];

  const nameToValue = (name: TOptionNames) => {
    switch (name) {
      case "бренду (по возрастанию)":
        return "brand-asc";
      case "бренду (по убыванию)":
        return "brand-desc";
      case "изготовителю (по возрастанию)":
        return "producer-asc";
      case "изготовителю (по убыванию)":
        return "producer-desc";
    }
  };
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
        onChange={(e) => setSortOption(nameToValue(e.target.value as TOptionNames))}
      >
        {options.map((option) => (
          <option key={option.value} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export { SortVodka };
