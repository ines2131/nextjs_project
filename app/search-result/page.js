"use client";

import { useSearchParams } from "next/navigation";
import SearchResultList from "../components/search-result/SearchResultList";
import SearchBar from "../components/common/SearchBar";
import ToggleSwitch from "../components/common/ToggleSwitch";
import styles from "./search-result.module.css";
import { useState } from "react";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const [isMapVisible, setIsMapVisible] = useState(false);

  const handleToggle = () => {
    setIsMapVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.headerWrapper}>
        <h1>Search Results</h1>
        <ToggleSwitch
          label={isMapVisible ? "Hide map" : "Show map"}
          isChecked={isMapVisible}
          onToggle={handleToggle}
        />
      </div>
      <SearchResultList searchParams={searchParams} />
    </div>
  );
};

export default SearchResult;
