import axios from "axios";

const ApiKey = "e0d96126812fe95a55e7845d36dbfc18";

export const moviesGenreService = () => {
  return axios
    .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}`)
    .then((resp) => resp.data.genres)
    .catch((err) => console.log(err));
};
