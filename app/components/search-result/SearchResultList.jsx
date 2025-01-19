"use client";

import { useEffect, useState } from "react";
import styles from "./searchResultList.module.css";
import axios from "axios";

const SearchResultList = ({ searchParams }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMapVisible, setIsMapVisible] = useState(false);

  useEffect(() => {
    const sport = searchParams.get("sport");
    const location = searchParams.get("location");
    const date = searchParams.get("date");
    const time = searchParams.get("time");

    if (!sport || !location || !date || !time) {
      console.error("Missing required query parameters");
      setIsLoading(false);
      return;
    }

    const fetchResults = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/api/search-result`, {
          params: { sport, location, date, time },
        });
        setResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [searchParams]);

  if (isLoading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (results.length === 0) {
    return (
      <p className={styles.noResults}>
        No courts available for the selected criteria.
      </p>
    );
  }

  const handleBook = () => {};

  return (
    <div>
      <div className={styles.listContainer}>
        {results.map((result, index) => (
          <div key={index} className={styles.listItem}>
            <h2 className={styles.courtName}>{result.courtName}</h2>
            <p className={styles.address}>{result.address}</p>
            <p className={styles.location}>
              Location: {result.latitude}, {result.longitude}
            </p>
            <button className={styles.bookBtn}>Book</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultList;
