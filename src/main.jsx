import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import AppRutes from "./routes/AppRutes";
import MoviesContextProvider from "./context/moviesContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviesContextProvider>
      <HashRouter>
        <AppRutes />
      </HashRouter>
    </MoviesContextProvider>
  </React.StrictMode>
);
