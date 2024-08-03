import React from "react";

import styles from "./SearchVodka.module.scss";

interface SearchVodkaProps {}

const SearchVodka: React.FC<SearchVodkaProps> = () => {
  return <div className={styles.searchVodka}>SearchVodka Component</div>;
};

export { SearchVodka };
