import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";

const ApiKey = "e0d96126812fe95a55e7845d36dbfc18";
const images = "https://image.tmdb.org/t/p/w500";
const URLdiscover = "https://api.themoviedb.org/3/discover/movie?api_key=";

const Home = () => {
  const [moviesHome, setMoviesHome] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URLdiscover}${ApiKey}&page=${2}`)
      .then((resp) => resp.json())
      .then((resp) => setMoviesHome(resp.results));
  }, []);

  const handleNavigate = () => {
    navigate("/movies");
  };

  return (
    <div className={style.contentHome}>
      <div className={`${style.contentRow}`}>
        {moviesHome?.map((movie) => (
          <div key={movie.id}>
            <img src={`${images}${movie.poster_path}`} alt={movie.title} />
            <div className={style.ImageOne}></div>
          </div>
        ))}
      </div>
      <div className={`${style.contentRow}`}>
        {moviesHome?.map((movie) => (
          <div key={movie.id}>
            <img src={`${images}${movie.poster_path}`} alt={movie.title} />
            <div className={style.ImageTwo}></div>
          </div>
        ))}
      </div>
      <div className={`${style.contentRow}`}>
        {moviesHome?.map((movie) => (
          <div key={movie.id}>
            <img src={`${images}${movie.poster_path}`} alt={movie.title} />
            <div className={style.ImageThree}></div>
          </div>
        ))}
      </div>
      <div className={`${style.contentRow}`}>
        {moviesHome?.map((movie) => (
          <div key={movie.id}>
            <img src={`${images}${movie.poster_path}`} alt={movie.title} />
            <div className={style.ImageFour}></div>
          </div>
        ))}
      </div>
      <div className={style.title}>
        <h1>welcome to movie info</h1>
        <h2 onClick={handleNavigate}>start</h2>
      </div>
    </div>
  );
};

export default Home;
