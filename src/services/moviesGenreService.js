import axios from "axios";

const ApiKey = import.meta.env.VITE_API_KEY;

export const moviesGenreService = () => {
  return axios
    .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}`)
    .then((resp) => resp.data.genres)
    .catch((err) => console.log(err));
};
