import React, { useEffect, useState } from "react";
import { getMovies } from "../lib/api";
import MovieCard from "./MovieCard";
import "./MovieList.scss";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    loadMovies(activePage);
  }, [activePage]);

  async function loadMovies(activePage) {
    try {
      const moviesResponse = await getMovies(activePage - 1);
      const movies = await moviesResponse.json();
      setMovies(movies);
    } catch (error) {
      setMovies([]);
    }
  }

  return (
    <section className="movie-list-container">
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <div className="pagination">
        <div>Page</div>
        <span
          className={activePage === 1 ? "active" : ""}
          onClick={() => setActivePage(1)}
        >
          1
        </span>
        <span
          className={activePage === 2 ? "active" : ""}
          onClick={() => setActivePage(2)}
        >
          2
        </span>
      </div>
    </section>
  );
};

export default MovieList;
