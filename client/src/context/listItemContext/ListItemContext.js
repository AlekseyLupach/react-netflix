import ListsReducer from "./ListsReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  lists: [],
  isFetching: false,
  eror: false,
};

export const ListsContext = createContext(INITIAL_STATE);

export const ListsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListsReducer, INITIAL_STATE);

  return (
    <ListsContext.Provider
      value={{
        lists: state.lists,
        isFetching: state.isFetching,
        error: state.eror,
        dispatch,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
