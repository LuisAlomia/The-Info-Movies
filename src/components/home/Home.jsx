import React from "react";
import axios from "axios";
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
    axios
      .get(`${URLdiscover}${ApiKey}&page=${2}`)
      .then((resp) => setMoviesHome(resp.data.results));
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
        <button className={style.button} onClick={handleNavigate}>
          start
        </button>
      </div>
    </div>
  );
};

export default Home;
