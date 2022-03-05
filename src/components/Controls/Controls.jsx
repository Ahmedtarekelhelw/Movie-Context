import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./style.scss";

const Controls = ({ movie, WatchList }) => {
  const {
    RemoveFromWatchList,
    RemoveFromWatched,
    MoveToWatchList,
    AddToWatched,
  } = useContext(Context);

  return (
    <div className="icon-container">
      <FontAwesomeIcon
        icon={WatchList ? "eye" : "eye-slash"}
        className="icon"
        onClick={() => {
          WatchList ? AddToWatched(movie) : MoveToWatchList(movie);
        }}
      />
      <FontAwesomeIcon
        icon="close"
        className="icon"
        onClick={() => {
          WatchList
            ? RemoveFromWatchList(movie.id)
            : RemoveFromWatched(movie.id);
        }}
      />
    </div>
  );
};

export default Controls;
