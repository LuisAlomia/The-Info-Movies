import axios from "axios";

const URLdiscover = "https://api.themoviedb.org/3/discover/movie?api_key=";
const ApiKey = import.meta.env.VITE_API_KEY;

export const movieGenreIdService = (id) => {
  return axios
    .get(`${URLdiscover}${ApiKey}&page=1&with_genres=${id}`)
    .then((resp) => resp.data.results)
    .catch((err) => console.log(err));
};
