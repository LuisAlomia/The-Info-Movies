import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import MoviesContextProvider from "./context/moviesContext";
import "./index.css";
import Movies from "./Movies";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviesContextProvider>
      <HashRouter>
        <Movies />
      </HashRouter>
    </MoviesContextProvider>
  </React.StrictMode>
);
