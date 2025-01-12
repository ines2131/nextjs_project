import { useState } from "react";
import styles from "./emailInput.module.css";

export default function EmailInput({ value, onChange, onBlur, error }) {
  const [emailStatus, setEmailStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // Added to track status type

  const handleEmailCheck = async () => {
    if (!value) {
      setEmailStatus("Please enter a valid email first.");
      setStatusType("error");
      return;
    }

    try {
      const response = await fetch("/api/auth/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });

      const { exists } = await response.json();
      if (exists) {
        setEmailStatus("This email is already registered.");
        setStatusType("error");
      } else {
        setEmailStatus("Email is available.");
        setStatusType("success");
      }
    } catch {
      setEmailStatus("Error checking email. Please try again.");
      setStatusType("error");
    }
  };

  return (
    <>
      <div className={styles.emailInputWrapper}>
        <input
          type="email"
          name="email"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={styles.input}
          required
        />
        <button
          type="button"
          onClick={handleEmailCheck}
          className={styles.checkButton}
        >
          Check
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {emailStatus && (
        <p
          className={`${
            statusType === "success" ? styles.success : styles.error
          }`}
        >
          {emailStatus}
        </p>
      )}
    </>
  );
}
