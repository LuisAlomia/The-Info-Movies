import axios from "axios";

const URLsearch = "https://api.themoviedb.org/3/search/movie?api_key=";
const ApiKey = import.meta.env.VITE_API_KEY;

export const movieSearchService = (search) => {
  return axios
    .get(`${URLsearch}${ApiKey}&page=1&query=${search}`)
    .then((resp) => resp.data.results)
    .catch((err) => console.log(err));
};
