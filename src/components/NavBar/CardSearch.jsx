import React from "react";
import style from "./CardSearch.module.css";
import { useNavigate } from "react-router-dom";

const URLimage = "https://image.tmdb.org/t/p/w500";

const CardSearch = ({ movie, setStateHidden, setRecommendationsHidden }) => {
  const navigate = useNavigate();
  const imagePoster = movie?.poster_path;
  const image = URLimage + imagePoster;

  const handleNavigateMovie = () => {
    navigate(`/movies/${movie.id}`);
    if (setStateHidden) {
      setStateHidden(false);
    } else {
      setRecommendationsHidden(false);
    }
  };

  return (
    <>
      {movie?.poster_path && (
        <figure onClick={handleNavigateMovie} className={style.card}>
          <div>
            <div className={style.contentImage}>
              {
                <img
                  className={style.cardImage}
                  src={image}
                  alt={movie.title}
                />
              }
            </div>
            <div className={style.cardText}>
              <h3>{movie.name ? movie.name : movie.title}</h3>
            </div>
          </div>
        </figure>
      )}
    </>
  );
};

export default CardSearch;

/* 
 <div className={style.contentImage}>
        {movie?.poster_path ? (
          <img className={style.cardImage} src={image} alt={movie.title} />
        ) : (
          <h4 className={style.cardNotImage}>No results</h4>
        )}
      </div>
      <div className={style.cardText}>
        <h3>{movie.name ? movie.name : movie.title}</h3>
      </div>
*/
