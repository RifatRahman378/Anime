import { useEffect, useState } from 'react';

import { ANIME } from "@consumet/extensions";
import { key } from 'localforage';

function Home() {
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
    console.log(topAiring);
    return (
        <div className="flex justify-center">
        <div>
            <h1 className="text-center">Top Airing Anime</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-center">
                {topAiring.map((anime) => (
                    <div className="card w-96 bg-base-100 shadow-xl" key={anime.id}>
                        <figure><img src={anime.image} alt={anime.title} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {anime.title}
                                {anime.new ? <div className="badge badge-secondary">NEW</div> : null}
                            </h2>
                            <p>{anime.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>    
    );
}

export default Home;
