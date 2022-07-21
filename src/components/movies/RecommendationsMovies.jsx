import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardSearch from "../NavBar/CardSearch";
import style from "./recommendationsMovies.module.css";

const ApiKey = "e0d96126812fe95a55e7845d36dbfc18";

const RecommendationsMovies = ({ setRecommendationsHidden }) => {
  const [movies, setMovies] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${ApiKey}&language=en-US&page=1`
    )
      .then((resp) => resp.json())
      .then((resp) => {
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
