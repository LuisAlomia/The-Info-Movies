import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

const URLsearch = "https://api.themoviedb.org/3/search/movie?api_key=";
const URLdiscover = "https://api.themoviedb.org/3/discover/movie?api_key=";

const ApiKey = "e0d96126812fe95a55e7845d36dbfc18";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [genresMovies, setGenresMovies] = useState();
  const [idGenre, setIdGenre] = useState();
  const [movieSearch, setMovieSearch] = useState();

  useEffect(() => {
    if (movieSearch) {
      axios
        .get(`${URLsearch}${ApiKey}&page=1&query=${movieSearch}`)
        .then((resp) => {
          setMovies(resp.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`${URLdiscover}${ApiKey}&page=1&with_genres=${idGenre}`)
        .then((resp) => {
          setMovies(resp.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [idGenre, movieSearch]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}`)
      .then((resp) => setGenresMovies(resp.data.genres))
      .catch((err) => console.log(err));
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        setMovieSearch,
        setIdGenre,
        movies,
        genresMovies,
        movieSearch,
        idGenre,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
