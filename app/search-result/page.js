"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sport = searchParams.get("sport");
    const location = searchParams.get("location");
    const date = searchParams.get("date");
    const time = searchParams.get("time");

    if (!sport || !location || !date || !time) {
      console.error("Missing required query parameters");
      setIsLoading(false);
      return;
    }

    const fetchResults = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `/api/search-result?sport=${sport}&location=${location}&date=${date}&time=${time}`
        );
        const data = await response.json();
        console.log("Fetched Data:", data);
        setResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [searchParams]); // Re-run the effect if searchParams change

  return (
    <div>
      <h1>Search Results</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <h2>{result.courtName}</h2>
              <p>Address: {result.address}</p>
              <p>
                Location: {result.latitude}, {result.longitude}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No courts available for the selected criteria.</p>
      )}
    </div>
  );
};

export default SearchResult;
