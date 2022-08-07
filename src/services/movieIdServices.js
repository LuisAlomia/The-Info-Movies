import axios from "axios";

const ApiKey = "e0d96126812fe95a55e7845d36dbfc18";

export const movieIdServices = (id) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`)
    .then((resp) => {
      const { data } = resp;
      return data;
    })
    .catch((err) => console.log(err));
};
