import axios from "axios";

const ApiKey = import.meta.env.VITE_API_KEY;

export const movieIdServices = (id) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`)
    .then((resp) => {
      const { data } = resp;
      return data;
    })
    .catch((err) => console.log(err));
};
