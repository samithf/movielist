import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster_path} alt={movie.poster_path} loading="lazy" />
      <div className="info">
        <span className="title">{movie.title}</span>
        <span className="released-year">
          {movie.release_date.substring(0, 4)}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
