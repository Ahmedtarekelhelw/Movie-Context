import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { Reducer } from "./Reducer";

const initState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//create context
export const Context = createContext(initState);

//provider
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const AddToWatchList = (movie) => {
    dispatch({ type: "AddToWatchList", payload: movie });
  };
  const RemoveFromWatchList = (id) => {
    dispatch({ type: "RemoveFromWatchList", payload: id });
  };

  const AddToWatched = (movie) => {
    dispatch({ type: "AddToWatched", payload: movie });
  };
  const RemoveFromWatched = (id) => {
    dispatch({ type: "RemoveFromWatched", payload: id });
  };
  const MoveToWatchList = (movie) => {
    dispatch({ type: "MoveToWatchList", payload: movie });
  };

  return (
    <Context.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        AddToWatchList,
        AddToWatched,
        RemoveFromWatchList,
        RemoveFromWatched,
        MoveToWatchList,
      }}
    >
      {children}
    </Context.Provider>
  );
};
