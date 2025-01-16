"use client";

import React, { useState } from "react";
import styles from "./mainSearch.module.css";
import SearchLocation from "./SearchLocation";
import { useRouter } from "next/navigation";

export default function MainSearch() {
  const [sport, setSport] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const router = useRouter();

  const timeOptions = [];
  for (let hour = 6; hour <= 23; hour++) {
    const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
    timeOptions.push(`${formattedHour}:00`);
  }

  const handleSearch = () => {
    // Build the query string for the URL
    const query = new URLSearchParams({
      sport,
      location,
      date,
      time,
    }).toString();

    // Redirect to the search-result page with query parameters
    router.push(`/search-result?${query}`);
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
            <option value="" disabled>
              Select a sport
            </option>
            <option value="tennis">Tennis</option>
            <option value="badminton">Badminton</option>
          </select>
        </div>
        <SearchLocation location={location} setLocation={setLocation} />
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
          <select
            className={styles.input}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="" disabled>
              Select a time
            </option>
            {timeOptions.map((timeOption, index) => (
              <option key={index} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
        </div>
        {/* Search Button */}
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
