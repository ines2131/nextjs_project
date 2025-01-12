"use client";

import React, { useState } from "react";
import styles from "./mainSearch.module.css";
import SearchLocation from "./SearchLocation";

export default function MainSearch() {
  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `api/search?sport=${sport}&location=${location}&date=${date}&time=${time}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get active, Book your game</h1>
      <div className={styles.searchBox}>
        {/* Sport */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Sport</label>
          <select
            className={styles.input}
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          >
            <option value="">Tennis</option>
            <option value="">Badminton</option>
          </select>
        </div>
        <SearchLocation />
        {/* Date */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>When</label>
          <input
            className={styles.input}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {/* Time */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Time</label>
          <input
            className={styles.input}
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        {/* Search Button */}
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
