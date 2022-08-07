import style from "./Description.module.css";

const URLimage = "https://image.tmdb.org/t/p/w500";

const Description = ({ movie }) => {
  return (
    <>
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
    </>
  );
};

export default Description;
