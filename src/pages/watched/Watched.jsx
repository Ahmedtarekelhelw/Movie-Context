import React, { useContext } from "react";
import MovieList from "../../components/movie-list/MovieList";
import { Context } from "../../context/Context";
import "./watched.scss";

const Watched = () => {
  const { watched } = useContext(Context);

  const bg = watched?.map(
    (movie) =>
      `https://image.tmdb.org/t/p/w500/${
        movie.backdrop_path || movie.poster_path
      }`
  );
  return (
    <div className="watched">
      <div className="container">
        <div className="head">
          <h3>my watched movies</h3>
          <span>
            {watched.length} {watched.length <= 1 ? "Movie" : "Movies"}
          </span>
        </div>
        <div className="list">
          <MovieList bg={bg} movies={watched} />
        </div>
      </div>
    </div>
  );
};

export default Watched;
