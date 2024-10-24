import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import styles from "./SearchVodka.module.scss";
import { TVodkaCollection } from "@/firebase/saveDataToFirebase";

interface SearchVodkaProps {
  sortedVodkaCollection: TVodkaCollection[];
  setFilteredVodkaCollection: React.Dispatch<React.SetStateAction<TVodkaCollection[] | []>>;
}

const SearchVodka: React.FC<SearchVodkaProps> = ({ sortedVodkaCollection, setFilteredVodkaCollection }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  console.log(searchTerm);

  useEffect(() => {
    const filtered = sortedVodkaCollection.filter((vodka) =>
      vodka.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVodkaCollection(filtered);
  }, [searchTerm, sortedVodkaCollection, setFilteredVodkaCollection]);

  return (
    <div className={styles.searchVodka}>
      <input
        className={styles.input}
        type="text"
        placeholder="Название..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IoSearch />
    </div>
  );
};

export { SearchVodka };
