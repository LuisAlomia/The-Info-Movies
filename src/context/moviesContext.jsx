import { useState, useEffect } from "react";
import { createContext } from "react";
import { moviesGenreService } from "../services/moviesGenreService";
import { movieGenreIdService } from "../services/movieGenreIdService";
import { movieSearchService } from "../services/movieSearchService";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [genresMovies, setGenresMovies] = useState();
  const [idGenre, setIdGenre] = useState();
  const [movieSearch, setMovieSearch] = useState();

  useEffect(() => {
    if (movieSearch) {
      movieSearchService(movieSearch).then((resp) => setMovies(resp));
    } else {
      movieGenreIdService(idGenre).then((resp) => setMovies(resp));
    }
  }, [idGenre, movieSearch]);

  useEffect(() => {
    moviesGenreService().then((resp) => setGenresMovies(resp));
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
