import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecommendationsMovies from "./RecommendationsMovies";
import { movieIdServices } from "../../services/movieIdServices";
import style from "./MoviesDescription.module.css";
import Description from "./Description";

const URLimage = "https://image.tmdb.org/t/p/w500";

const MoviesDescription = () => {
  const [movie, setMovie] = useState();
  const [recommendationsHidden, setRecommendationsHidden] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    movieIdServices(id).then((resp) => setMovie(resp));
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
          <Description movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MoviesDescription;
