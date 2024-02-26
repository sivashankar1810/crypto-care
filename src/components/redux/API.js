import axios from "axios";
const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;
const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST;

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
});

instance.interceptors.request.use(
  (config) => {
    //   config.headers[]
    if (!config.headers["x-rapidapi-key"]) {
      config.headers["x-rapidapi-key"] = RAPIDAPI_KEY;
    }
    if (!config.headers["x-rapidapi-host"]) {
      config.headers["x-rapidapi-host"] = RAPIDAPI_HOST;
    }
    if (!config.headers["x-access-token"]) {
      config.headers["x-access-token"] = RAPIDAPI_KEY;
      
    }
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
    // if (!config.headers["x-access-token"]) {
    //   config.headers["Access-Control-Allow-Origin"] = "*",
    //  // config.headers["Access-Control-Allow-Methods"]= "GET,PUT,POST,DELETE,PATCH,OPTIONS";
    // }

    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (data) => {
    return data;
  },
  (err) => {
    console.log(err);
  }
);

export default instance;
