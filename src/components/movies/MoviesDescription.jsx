import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecommendationsMovies from "./RecommendationsMovies";
import style from "./MoviesDescription.module.css";

const ApiKey = "e0d96126812fe95a55e7845d36dbfc18";
const URLimage = "https://image.tmdb.org/t/p/w500";

const MoviesDescription = () => {
  const [movie, setMovie] = useState();
  const [recommendationsHidden, setRecommendationsHidden] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`)
      .then((resp) => setMovie(resp.data))
      .catch((err) => console.log(err));
  }, [id]);

  const imagePoster = movie?.poster_path
    ? movie?.poster_path
    : movie?.backdrop_path;
  const image = URLimage + imagePoster;

  const handelRecommendations = () => {
    setRecommendationsHidden(!recommendationsHidden);
  };
  return (
    <div className={style.contentDecscription}>
      <div className={style.imageDescription}>
        <img src={image} alt={movie?.title} />
      </div>
      <div className={style.contentDetails}>
        <div className={style.title}>
          <h2>{movie?.title}</h2>
          <h3>{movie?.tagline}</h3>
        </div>
        <button
          onClick={handelRecommendations}
          className={style.btnRecommendations}
        >
          Recommendations
        </button>

        <div className={style.constentAll}>
          {recommendationsHidden === true && (
            <div className={style.recommendations}>
              <RecommendationsMovies
                setRecommendationsHidden={setRecommendationsHidden}
              />
            </div>
          )}

          <p className={style.overview}>{movie?.overview}</p>
          <h4 className={style.date}>release date: {movie?.release_date}</h4>

          <div className={style.contentP}>
            <h4>Genres:</h4>
            {movie?.genres?.splice(0, 2).map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <div className={style.contentP}>
            <h4>Lenguages:</h4>
            {movie?.spoken_languages?.map((lenguage, index) => (
              <p key={index}>{lenguage.english_name}</p>
            ))}
          </div>
          <div className={style.contentP}>
            <h4>companie:</h4>
            <p>{movie?.production_companies[0]?.name}</p>
          </div>
          <div className={style.contentP}>
            <h4>country:</h4>
            <p>{movie?.production_countries[0]?.name}</p>
          </div>
          <div className={style.productionConten}>
            {movie?.production_companies[0]?.logo_path && (
              <img
                src={URLimage + movie?.production_companies[0]?.logo_path}
                alt={movie?.production_companies[0]?.name}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDescription;
