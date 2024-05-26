import { useEffect, useState } from 'react';
import './App.css';
import { ANIME } from "@consumet/extensions";

function App() {
  const [topAiring, setTopAiring] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const gogoanime = new ANIME.Gogoanime();

  useEffect(() => {
    const fetchTopAiring = async () => {
      try {
        const data = await gogoanime.fetchTopAiring();
        console.log('Fetched data:', data); // Log the fetched data for debugging
        if (data && Array.isArray(data.results)) {
          setTopAiring(data.results);
        } else {
          throw new Error('Unexpected response format');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top airing anime:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchTopAiring();
  }, []); // Empty dependency array ensures this effect runs only once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Top Airing Anime</h1>
      <ul>
        {topAiring.map((anime) => (
          <li key={anime.id}>{anime.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
