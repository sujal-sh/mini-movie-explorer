import React from 'react';

const Watchlist = ({ movies }) => (
  <div className="watchlist">
    <h2>📺 Watchlist</h2>
    {movies.length === 0 ? (
      <p>No movies added yet.</p>
    ) : (
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>
        ))}
      </ul>
    )}
  </div>
);

export default Watchlist;