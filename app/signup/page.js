import Link from "next/link";
import SocialForm from "../components/socialForm";
import styles from "./singup.module.css";
import SignupForm from "../components/signupForm";

export default function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Sign Up</h1>
          <div className={styles.subText}>
            Already have a AceSpace account?{" "}
            <Link href="/signin" className={styles.link}>
              Sign In
            </Link>
          </div>
        </div>
        <SignupForm />
        <div className={styles.orWrapper}>
          <hr className={styles.line} />
          <span className={styles.orText}>or</span>
          <hr className={styles.line} />
        </div>
        <SocialForm />
      </div>
    </div>
  );
}
