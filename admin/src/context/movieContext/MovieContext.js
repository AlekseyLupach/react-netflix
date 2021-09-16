import MovieReducer from "./MovieReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
  eror: false,
};

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.eror,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
