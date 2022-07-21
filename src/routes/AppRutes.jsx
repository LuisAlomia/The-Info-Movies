import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import LayoutMovies from "../components/LayoutMovies";
import MoviesDescription from "../components/movies/MoviesDescription";

const AppRutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<LayoutMovies />}>
        <Route index element={<div></div>} />
        <Route path=":id" element={<MoviesDescription />} />
      </Route>
    </Routes>
  );
};

export default AppRutes;
