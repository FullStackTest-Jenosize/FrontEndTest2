import styles from "../../styles/body.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Body = () => {
    const [results, setResults] = useState(null);
    const [query, setQuery] = useState("");
    const handleSearch = async () => {
        try {
          const response = await axios.get(
            `/api/restaurants?query=${encodeURIComponent(query)}`
          );
          setResults(response.data);
          console.log(`/api/restaurants?query=${encodeURIComponent(query)}`);
          console.log(JSON.stringify(results, null, 3));
        } catch (error) {
          console.error(error);
          setResults(null);
        }
      };
  
    return (
      <div className={styles.body}>
        <div className={styles.box}>
          <input value={query}
          onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Find Restaurants" /><br />
          <button onClick={handleSearch} type="submit">Search</button>
        </div>
        
        {results && (
          <div className={styles.results}>
            <h2>Search Results</h2>
            {results && <pre>{JSON.stringify(results, null, 3)}</pre>}
            {/* {results.map((result) => (
              <div key={result.id} className={styles.resultItem}>
                <h3>{result.name}</h3>
                <p>{result.address}</p>
                {result.image && (
                  <Image
                    src={result.image} width={200} height={100}
                    alt={result.name}
                    className={styles.resultImage}
                  />
                )}
              </div>
            ))} */}
          </div>
        )}
      </div>
    );
};

export default Body;
