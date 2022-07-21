import React from "react";
import style from "./popularityPoints.module.css";

const PopularityPoints = ({ movie }) => {
  const popularity = movie?.vote_average;
  let votes = [];

  if (popularity <= 2) {
    votes.push({ id: 1, value: "" });
  } else if (popularity <= 4) {
    votes.push({ id: 1, value: "" }, { id: 2, value: "" });
  } else if (popularity <= 6) {
    votes.push(
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" }
    );
  } else if (popularity <= 8) {
    votes.push(
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "" }
    );
  } else if (popularity <= 10) {
    votes.push(
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "" },
      { id: 5, value: "" }
    );
  }

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
