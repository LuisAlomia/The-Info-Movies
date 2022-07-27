import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../context/moviesContext";
import style from "./navBar.module.css";
import Search from "./Search";

const NavBar = () => {
  const { genresMovies, setIdGenre, movieSearch, setMovieSearch, idGenre } =
    useContext(MoviesContext);
  const [stateHidden, setStateHidden] = useState(false);
  const hidden = useRef();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/movies");
  };

  const handleGenderId = (id) => setIdGenre(id);

  const handleHidenSearch = () => {
    hidden.current.classList.add(`${style.hidden}`);
    setStateHidden(!stateHidden);
  };

  const handleHiddenFilter = () => {
    hidden.current.classList.toggle(`${style.hidden}`);
  };

  const btnBack = () => setMovieSearch("");

  return (
    <>
      <nav className={style.containerNav}>
        <div>
          <Search stateHidden={stateHidden} setStateHidden={setStateHidden} />
        </div>
        <div className={style.nav}>
          <span onClick={handleNavigate} className={`${style.navIcon}  `}>
            <i className={`${style.icon} fa-solid fa-house`}></i>
          </span>
          <span onClick={handleHidenSearch} className={`${style.navIcon}  `}>
            <i className={`${style.icon} fa-solid fa-magnifying-glass`}></i>
          </span>
          {!movieSearch ? (
            <span onClick={handleHiddenFilter} className={`${style.navIcon} `}>
              <i className={`${style.icon} fa-solid fa-filter`}></i>
            </span>
          ) : (
            <span onClick={btnBack} className={`${style.navIcon} `}>
              <i className={`${style.icon} fa-solid fa-arrow-left`}></i>
            </span>
          )}
        </div>
        <div className={`${style.navItems} ${style.hidden}`} ref={hidden}>
          {genresMovies
            ?.filter((genre) => genre.id === idGenre)
            .map((genre) => (
              <h3 key={genre.id}>{genre.name}</h3>
            ))}
          <ul>
            <li
              className={`${style.navItem} ${style.navItemAll}`}
              onClick={() => handleGenderId("")}
            >
              All
            </li>
            {genresMovies?.map((genre) => (
              <li
                className={style.navItem}
                key={genre.id}
                onClick={() => handleGenderId(genre.id)}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
