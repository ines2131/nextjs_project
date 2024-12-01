import MainSearch from "./components/mainSearch";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainSearch />
    </div>
  );
}
