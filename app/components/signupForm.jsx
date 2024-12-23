import styles from "./signupForm.module.css";

export default function SignupForm() {
  return (
    <form method="POST" action="/api/auth/signup" className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input type="email" id="email" className={styles.input} />
      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input type="password" id="password" className={styles.input} />
      <label htmlFor="password" className={styles.label}>
        Confirm Password
      </label>
      <input type="password" id="confirmPassword" className={styles.input} />
      <div className={styles.inputWrapper}>
        <div className={styles.checkboxWrapper}>
          <input type="checkbox" className={styles.checkbox} />
          Promotions via push or email
        </div>
        <div className={styles.checkboxWrapper}>
          <input type="checkbox" className={styles.checkbox} />
          Required data for AceSpace use
        </div>
      </div>
      <button type="submit" className={styles.signinButton}>
        Sign Up
      </button>
    </form>
  );
}
