import Link from "next/link";
import styles from "./navbar.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Navbar() {
  let session = await getServerSession(authOptions);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.home}>
        AceSpace
      </Link>
      {session ? (
        <Link href="/mypage">
          <button className={styles.signupBtn}>My Page</button>
        </Link>
      ) : (
        <Link href="/signin">
          <button className={styles.signupBtn}>Sign In</button>
        </Link>
      )}
    </div>
  );
}
