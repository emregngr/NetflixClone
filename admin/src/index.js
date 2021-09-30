import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext/authContext";
import { MovieContextProvider } from "./Context/MovieContext/movieContext";
import { ListContextProvider } from "./Context/ListContext/listContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);