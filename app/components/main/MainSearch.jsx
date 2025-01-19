import styles from "./mainSearch.module.css";
import SearchBar from "../common/SearchBar";

export default function MainSearch() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get active, Book your game</h1>
      <SearchBar />
    </div>
  );
}
