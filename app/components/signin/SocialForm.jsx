"use client";
import Image from "next/image";
import styles from "./socialForm.module.css";
import { signIn } from "next-auth/react";

export default function SocialForm() {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.socialButton}
        onClick={() => {
          signIn("github");
        }}
      >
        <Image src="/github-mark.png" alt="Github" width={20} height={20} />
        Continue with Github
      </button>
      <button
        className={styles.socialButton}
        onClick={() => {
          signIn("google");
        }}
      >
        <Image src="/google.png" alt="Google" width={20} height={20} />
        Continue with Google
      </button>
    </div>
  );
}
