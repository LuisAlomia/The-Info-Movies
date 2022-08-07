import axios from "axios";

const ApiKey = "e0d96126812fe95a55e7845d36dbfc18";
const URLdiscover = "https://api.themoviedb.org/3/discover/movie?api_key=";

export const moviesHomeServices = () => {
  return axios
    .get(`${URLdiscover}${ApiKey}&page=${2}`)
    .then((resp) => {
      return resp;
    })
    .catch((err) => console.log(err));
};
