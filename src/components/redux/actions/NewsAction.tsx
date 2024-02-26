import {
  NewsActionTypes,
  ALL_NEWS,
  ALL_NEWS_LOADING,
  ALL_NEWS_FAIL,
} from "./NewsActionTypes";
import { Dispatch } from "redux";
import axios from "../API";
// import axios from "axios";

export const GetTredingNews =
  (newsCategory: string, count: number) =>
  async (dispatch: Dispatch<NewsActionTypes>) => {
    try {
      dispatch({
        type: ALL_NEWS_LOADING,
      });

      const response = await axios.get(
        `http://localhost:8000/news/getLatestNews?search=${newsCategory}&limit=${count}&offset=0&sortBy=Date&freshness=day`,
        {
          headers: {
            "x-rapidapi-host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST!,
            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY!,
          },
        }
      );
      dispatch({
        type: ALL_NEWS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ALL_NEWS_FAIL,
      });
    }
  };
