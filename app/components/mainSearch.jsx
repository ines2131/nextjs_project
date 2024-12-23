"use client";

import React, { useState } from "react";
import styles from "./mainSearch.module.css";

export default function MainSearch() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get active, Book your game</h1>
      <div className={styles.searchBox}>
        {/* Sport */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Sport</label>
          <select className={styles.input}>
            <option value="">Tennis</option>
            <option value="">Padel</option>
            <option value="">Pickle ball</option>
          </select>
        </div>
        {/* Location */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Where</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Search venue name, city or state"
          ></input>
        </div>
        {/* Date */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>When</label>
          <input className={styles.input} type="date" />
        </div>
        {/* Time */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Time</label>
          <input className={styles.input} type="time" />
        </div>
        {/* Search Button */}
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
}
