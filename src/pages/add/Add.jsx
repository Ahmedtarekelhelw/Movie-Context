import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import SearchResult from "../../components/search-results/SearchResult";
import "./Add.scss";

const Base_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false`;
const Add = () => {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [text, setText] = useState("");
  const [page, setPage] = useState(2);
  const [total_pages, setTotalPages] = useState(0);

  useEffect(() => {
    const Search = async () => {
      if (keyword.length > 3) {
        const res = await axios.get(Base_URL, {
          params: { query: keyword, page: 1 },
        });

        if (res.data.results.length === 0) {
          setText("No Search Results with this word");
          setMovies([]);
          setTotalPages(0);
        } else {
          setText("");
          setMovies(res.data.results);
          setTotalPages(res.data.total_pages);
        }
      } else {
        setMovies([]);
        setTotalPages(0);
      }
    };
    Search();
  }, [keyword]);

  const Load = async () => {
    const res = await axios.get(Base_URL, {
      params: { query: keyword, page: page },
    });
    setMovies([...movies, ...res.data.results]);
    setPage((prev) => prev + 1);
  };
  return (
    <div className="search">
      <div className="container">
        <input
          type="text"
          placeholder="Search For a Movie"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="search-result">
          {text && <h2>{text}</h2>}
          {movies.map((movie) => (
            <SearchResult key={movie.id} movie={movie} />
          ))}

          {movies.length > 0 && page <= total_pages ? (
            <Button className="load" onClick={() => Load()}>
              load more
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Add;
