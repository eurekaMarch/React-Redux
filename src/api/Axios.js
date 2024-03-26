import axios from "axios";

const createAxios = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
  });
};

const movieApi = createAxios("http://www.omdbapi.com/");

export { movieApi };
