import style from "./cardMovie.module.css";
import PopularityPoints from "./PopularityPoints";

const URLimage = "https://image.tmdb.org/t/p/w500";

const CardMovie = ({ movie }) => {
  const imagePoster = movie?.poster_path
    ? movie?.poster_path
    : movie?.backdrop_path;
  const image = URLimage + imagePoster;

  return (
    <>
      {movie?.poster_path && (
        <figure className={style.card}>
          <div className={style.contentImage}>
            <img className={style.cardImage} src={image} alt={movie.title} />
          </div>
          <div className={style.cardText}>
            <h3>{movie.name ? movie.name : movie.title}</h3>
            <div>
              <PopularityPoints movie={movie} />
            </div>
          </div>
        </figure>
      )}
    </>
  );
};

export default CardMovie;
