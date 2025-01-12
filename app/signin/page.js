import Link from "next/link";
import styles from "./signin.module.css";
import SigninForm from "../components/signin/SigninForm";
import SocialForm from "../components/signin/SocialForm";

export default function Signin() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Sign In</h1>
          <div className={styles.subText}>
            Don't have a AceSpace account yet?{" "}
            <Link href="/signup" className={styles.link}>
              Sign Up
            </Link>
          </div>
        </div>
        <SigninForm />
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
