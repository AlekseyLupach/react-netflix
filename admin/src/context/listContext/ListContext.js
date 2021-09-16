import ListReducer from "./ListReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  lists: [],
  isFetching: false,
  eror: false,
};

export const ListContext = createContext(INITIAL_STATE);

export const ListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        isFetching: state.isFetching,
        error: state.eror,
        dispatch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
