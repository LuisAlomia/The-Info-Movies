import { useNavigate } from "react-router-dom";
import BackgroundMovie from "./BackgroundMovie";
import style from "./home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/movies");
  };

  const rowUne = style.ImageOne;
  const rowTwo = style.ImageTwo;
  const rowThree = style.ImageThree;
  const rowFour = style.ImageFour;

  return (
    <div className={style.contentHome}>
      <div className={`${style.contentRow}`}>
        <BackgroundMovie row={rowUne} />
      </div>
      <div className={`${style.contentRow}`}>
        <BackgroundMovie row={rowTwo} />
      </div>
      <div className={`${style.contentRow}`}>
        <BackgroundMovie row={rowThree} />
      </div>
      <div className={`${style.contentRow}`}>
        <BackgroundMovie row={rowFour} />
      </div>
      <div className={style.title}>
        <h1>welcome to movie info</h1>
        <button className={style.button} onClick={handleNavigate}>
          start
        </button>
      </div>
    </div>
  );
};

export default Home;
