import { useState } from "react";
import { moviesHomeServices } from "../../services/moviesHomeServices";

const images = "https://image.tmdb.org/t/p/w500";

const BackgroundMovie = ({ row }) => {
  const [moviesHome, setMoviesHome] = useState();

  moviesHomeServices().then((resp) => setMoviesHome(resp.data.results));

  return (
    <>
      {moviesHome?.map((movie) => (
        <div key={movie.id}>
          <img src={`${images}${movie.poster_path}`} alt={movie.title} />
          <div className={row}></div>
        </div>
      ))}
    </>
  );
};

export default BackgroundMovie;
