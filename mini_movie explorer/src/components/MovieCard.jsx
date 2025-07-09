import React from 'react';

const MovieCard = ({ movie, onAdd }) => (
  <div className="movie-card">
    <img src={movie.Poster} alt={movie.Title} />
    <h3>{movie.Title}</h3>
    <p>{movie.Year}</p>
    <button onClick={() => onAdd(movie)}>＋ Watchlist</button>
  </div>
);

export default MovieCard;