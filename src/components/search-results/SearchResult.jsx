import React, { useContext } from "react";
import { Context } from "../../context/Context";
import SearchItem from "../search-item/SearchItem";
import "./style.scss";

const SearchResult = ({ movie }) => {
  const { watched, watchlist } = useContext(Context);

  //For Disable Button of add to Watched
  const findwatched = watched.filter((watch) => movie.id === watch.id);

  //For Disable Button of add to WatchList
  const findwatchlist = watchlist.filter((watch) => movie.id === watch.id);
  const disableWatchlist = findwatchlist.length
    ? true
    : findwatched.length
    ? true
    : false;

  return (
    <div className="search-item">
      <SearchItem
        movie={movie}
        findwatched={findwatched}
        disableWatchlist={disableWatchlist}
      />
    </div>
  );
};

export default SearchResult;
