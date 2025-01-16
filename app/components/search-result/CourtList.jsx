"use client";

import React from "react";
import styles from "./courtList.module.css";

export default function CourtList({ searchResults }) {
  // Filter available courts
  const availableCourts = searchResults.filter(
    (court) => court.status === "available"
  );

  return (
    <div className={styles.container}>
      <h2>Available Courts</h2>
      {availableCourts.length > 0 ? (
        <ul className={styles.list}>
          {availableCourts.map((court, index) => (
            <li key={index} className={styles.listItem}>
              <h3>{court.name}</h3>
              <p>Location: {court.location}</p>
              <p>Sport: {court.sport}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No available courts found for the selected criteria.</p>
      )}
    </div>
  );
}
