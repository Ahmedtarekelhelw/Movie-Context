import React from "react";
import { useContext } from "react";
import MovieList from "../../components/movie-list/MovieList";
import { Context } from "../../context/Context";
import "./watchlist.scss";

const WatchList = () => {
  const { watchlist } = useContext(Context);

  return (
    <div className="watch-list">
      <div className="container">
        <div className="head">
          <h3>my watchlist</h3>
          <span>
            {watchlist.length} {watchlist.length <= 1 ? "Movie" : "Movies"}
          </span>
        </div>
        <div className="list">
          <MovieList movies={watchlist} WatchList />
        </div>
      </div>
    </div>
  );
};

export default WatchList;
