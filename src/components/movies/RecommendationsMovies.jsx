import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieRecomendatioService } from "../../services/movieRecomendatioService";
import CardSearch from "../NavBar/CardSearch";
import style from "./recommendationsMovies.module.css";

const RecommendationsMovies = ({ setRecommendationsHidden }) => {
  const [movies, setMovies] = useState();
  const { id } = useParams();

  useEffect(() => {
    movieRecomendatioService(id).then((resp) => {
      setMovies(resp.results);
    });
  }, [id]);

  return (
    <div className={style.recommendationsMovies}>
      {movies?.slice(0, 4).map((movie) => (
        <CardSearch
          key={movie.id}
          movie={movie}
          setRecommendationsHidden={setRecommendationsHidden}
        />
      ))}
    </div>
  );
};

export default RecommendationsMovies;
