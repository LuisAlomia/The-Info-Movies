import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../../context/moviesContext";
import CardMovie from "./CardMovie";
import style from "./listMovies.module.css";

const ListMovies = () => {
  const { movies, idGenre, genresMovies } = useContext(MoviesContext);

  return (
    <section className={style.content}>
      <h2 className={style.selectMovie}>SELECT MOVIE</h2>
      <div className={style.container}>
        {genresMovies
          ?.filter((genre) => genre.id === idGenre)
          .map((genre) => (
            <h2 key={genre.id}>{genre.name}</h2>
          ))}
        {idGenre === "" && <h2>All</h2>}
        <div className={style.movieList}>
          {movies?.map((movie) => (
            <Link
              to={`/movies/${movie.id}`}
              className={style.movieItem}
              key={movie.id}
            >
              <CardMovie movie={movie} />
            </Link>
          ))}
        </div>
      </div>
      <div className={style.movieDescription}>
        <Outlet />
      </div>
    </section>
  );
};

export default ListMovies;
