import React from "react";
import NavBar from "./NavBar/NavBar";
import ListMovies from "./movies/ListMovies";
import style from "./layoutMovies.module.css";
import { useRef } from "react";

const LayoutMovies = () => {
  const hiddenBtn = useRef();

  const btnHidden = () => {
    hiddenBtn.current.classList.toggle(style.navBarMovil);
  };

  return (
    <>
      <button onClick={btnHidden} className={style.btnHidden}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className={style.contentMovies}>
        <div className={style.navBar} ref={hiddenBtn}>
          <NavBar />
        </div>
        <div className={`${style.movies}`}>
          <ListMovies />
        </div>
      </div>
    </>
  );
};

export default LayoutMovies;
