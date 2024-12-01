import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.home}>
        AceSpace
      </Link>
      <Link href="/signin">
        <button className={styles.signupBtn}>Sign In</button>
      </Link>
    </div>
  );
}
