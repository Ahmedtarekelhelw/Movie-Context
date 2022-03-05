import Controls from "../Controls/Controls";
import Movie from "../movie-item/Movie";
import "./style.scss";

const MovieList = ({ movies, WatchList }) => {
  return (
    <>
      {movies.length ? (
        <div className="wapper">
          {movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <Movie
                key={movie.id}
                img={movie.backdrop_path || movie.poster_path}
              />
              <Controls movie={movie} WatchList={WatchList} />
            </div>
          ))}
        </div>
      ) : (
        <h3 className="no-movie">
          There Is No Movies in Your{" "}
          {WatchList ? "Watch List" : "Watched Movies"}
        </h3>
      )}
    </>
  );
};

export default MovieList;
