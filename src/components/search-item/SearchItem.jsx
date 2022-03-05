import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Button from "../buttons/Button";
import Movie from "../movie-item/Movie";
import "./style.scss";

const SearchItem = ({ movie, disableWatchlist, findwatched }) => {
  //For get only year from api
  let year = movie?.release_date?.split("-")[0];

  const { AddToWatchList, AddToWatched } = useContext(Context);

  return (
    <>
      <div className="image">
        <Movie img={movie.backdrop_path || movie.poster_path} />
      </div>
      <div className="content">
        <div className="top">
          <h3>{movie.original_title}</h3>
          <span>{year}</span>
        </div>
        <div className="bottom">
          <div className="btns">
            <Button
              onClick={() => AddToWatchList(movie)}
              disabled={disableWatchlist}
            >
              add to watchlist
            </Button>
            <Button
              onClick={() => AddToWatched(movie)}
              disabled={findwatched.length}
            >
              add to watched
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
