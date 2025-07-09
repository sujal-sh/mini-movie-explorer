import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import Watchlist from './components/Watchlist';
import './styles/App.css';

const API_URL = 'https://www.omdbapi.com/?apikey=4a3b711b';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('watchlist');
    if (saved) setWatchlist(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) return;
    try {
      const res = await fetch(\`\${API_URL}&s=\${searchTerm}\`);
      const data = await res.json();
      if (data.Search) setMovies(data.Search.slice(0, 10));
      else setMovies([]);
    } catch (err) {
      console.error('API fetch error:', err);
    }
  };

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div className="app-container">
      <h1>🎬 Mini Movie Explorer</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <div className="content">
        <div className="results">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} onAdd={addToWatchlist} />
          ))}
        </div>
        <Watchlist movies={watchlist} />
      </div>
    </div>
  );
};

export default App;