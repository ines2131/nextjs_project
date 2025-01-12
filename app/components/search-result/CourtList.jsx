import { useEffect, useState } from "react";

export default function CourtList({ searchQuery }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/search?query=${searchQuery}`);
      const data = await response.json();
      setResults(data);
    };
    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Results for {searchQuery}</h2>
      <ul>
        {results.map((facility, index) => (
          <li key={index}>
            <h3>{facility.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
