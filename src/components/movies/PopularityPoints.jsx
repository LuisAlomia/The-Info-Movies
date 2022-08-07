import { iteration } from "../../utils/iteration";
import style from "./popularityPoints.module.css";

const PopularityPoints = ({ movie }) => {
  const popularity = movie?.vote_average;

  const votes = iteration(popularity);

  return (
    <>
      <h4 className={style.type}>popular</h4>
      <div className={style.contentPopularity}>
        <p className={style.popularityText}>movies</p>
        <div className={style.contentPopularityVote}>
          {votes.map((vote) => (
            <div className={style.popularityVote} key={vote.id}>
              {vote.value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default PopularityPoints;
