import axios from "axios";

const URLdiscover = "https://api.themoviedb.org/3/discover/movie?api_key=";
const ApiKey = import.meta.env.VITE_API_KEY;

export const moviesHomeServices = () => {
  return axios
    .get(`${URLdiscover}${ApiKey}&page=${2}`)
    .then((resp) => {
      return resp;
    })
    .catch((err) => console.log(err));
};
