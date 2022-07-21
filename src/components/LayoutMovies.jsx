import React from "react";
import NavBar from "./NavBar/NavBar";
import ListMovies from "./movies/ListMovies";
import style from "./layoutMovies.module.css";

const LayoutMovies = () => {
  return (
    <>
      <div className={style.contentMovies}>
        <div className={style.navBar}>
          <NavBar />
        </div>
        <div className={style.movies}>
          <ListMovies />
        </div>
      </div>
    </>
  );
};

export default LayoutMovies;
