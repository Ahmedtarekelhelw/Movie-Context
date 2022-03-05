import React from "react";
import "./style.scss";

const Movie = ({ img }) => {
  const Img = img ? true : false;
  return (
    <>
      {Img ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt=""
          draggable={false}
        />
      ) : (
        <div className="not-img"></div>
      )}
    </>
  );
};

export default Movie;
