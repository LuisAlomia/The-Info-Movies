import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { MoviesContext } from "../../context/moviesContext";
import CardSearch from "./CardSearch";
import Keyboard from "./Keyboard";
import style from "./search.module.css";

const Search = ({ stateHidden, setStateHidden }) => {
  const { setMovieSearch, movieSearch, movies } = useContext(MoviesContext);
  const [input, setInput] = useState("");
  const [letterKeyboard, setLetterKeyboard] = useState("");

  useEffect(() => {
    setInput(letterKeyboard);
    setMovieSearch(input);
  }, [letterKeyboard]);

  const changeInput = (e) => {
    setInput(e.target.value);
    setMovieSearch(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLetterKeyboard("");
    setStateHidden(false);
  };

  return (
    <div
      className={
        stateHidden === true
          ? style.contentSearch
          : `${style.contentSearch} ${style.hiddenSearch}`
      }
    >
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={changeInput}
          value={input}
          className={style.input}
          autoFocus={true}
          autoComplete="off"
          placeholder="Name movie"
        />
      </form>

      <div className={style.contentCradSearch}>
        {movieSearch &&
          movies
            .slice(0, 4)
            .map((movie) => (
              <CardSearch
                key={movie.id}
                movie={movie}
                setStateHidden={setStateHidden}
              />
            ))}
      </div>

      <div className={style.Keyboard}>
        <Keyboard
          setLetterKeyboard={setLetterKeyboard}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Search;
