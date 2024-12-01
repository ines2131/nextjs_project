import styles from "./socialForm.module.css";

export default function SocialForm() {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.socialButton}>Continue with Facebook</button>
      <button className={styles.socialButton}>Continue with Google</button>
    </div>
  );
}
