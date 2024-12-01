"use client";
import styles from "./signinForm.module.css";

export default function SigninForm() {
  return (
    <form className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input type="email" id="email" className={styles.input} />
      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input type="password" id="password" className={styles.input} />
      <button type="submit" className={styles.signinButton}>
        Sign In
      </button>
    </form>
  );
}
