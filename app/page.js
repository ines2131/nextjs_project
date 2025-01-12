import MainSearch from "./components/main/MainSearch";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainSearch />
    </div>
  );
}
