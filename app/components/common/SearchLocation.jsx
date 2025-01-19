import styles from "./searchBar.module.css";

export default function SearchLocation({ location, setLocation }) {
  const regions = [
    "NORTH",
    "WAN CHAI",
    "KOWLOON CITY",
    "KWAI TSING",
    "EASTERN",
    "SAI KUNG",
    "SHAM SHUI PO",
    "SOUTHERN",
    "YAU TSIM MONG",
    "ISLANDS",
    "SHA TIN",
    "KWUN TONG",
  ];

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>Where</label>
      <select
        className={styles.input}
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="" disabled>
          Select a location
        </option>
        {regions.map((region, i) => (
          <option key={i} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}
