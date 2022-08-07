import axios from "axios";

const URLdiscover = "https://api.themoviedb.org/3/discover/movie?api_key=";
const ApiKey = "e0d96126812fe95a55e7845d36dbfc18";

export const movieGenreIdService = (id) => {
  return axios
    .get(`${URLdiscover}${ApiKey}&page=1&with_genres=${id}`)
    .then((resp) => resp.data.results)
    .catch((err) => console.log(err));
};
