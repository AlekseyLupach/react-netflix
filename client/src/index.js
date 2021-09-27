import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { ListsContextProvider } from "./context/listsContext/ListsContext";
import { ContentContextProvider } from "./context/contentContext/ContentContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ListsContextProvider>
        <ContentContextProvider>
          <App />
        </ContentContextProvider>
      </ListsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
