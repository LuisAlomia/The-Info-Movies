import axios from "axios";

const ApiKey = import.meta.env.VITE_API_KEY;

export const movieRecomendatioService = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${ApiKey}&language=en-US&page=1`
    )
    .then((resp) => {
      const { data } = resp;
      return data;
    })
    .catch((err) => console.log(err));
};
