import ContentReducer from "./ContentReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  content: [],
  isFetching: false,
  eror: false,
};

export const ContentContext = createContext(INITIAL_STATE);

export const ContentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContentReducer, INITIAL_STATE);

  return (
    <ContentContext.Provider
      value={{
        content: state.content,
        isFetching: state.isFetching,
        error: state.eror,
        dispatch,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
