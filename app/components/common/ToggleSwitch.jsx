import React from "react";
import styles from "./toggleSwitch.module.css";

export default function ToggleSwitch({ label, isChecked, onToggle }) {
  return (
    <div className={styles.toggleContainer}>
      <label className={styles.label}>
        {label}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onToggle}
          className={styles.checkbox}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
