import {
  ALL_WATCHLIST,
  ALL_WATCHLIST_LOADING,
  ALL_WATCHLIST_FAIL,
  WatchlistActionTypes,
} from "./WatchlistActionTypes";
import { Dispatch } from "redux";
import axios from "../API";

export const GetWatchlist =
  () => async (dispatch: Dispatch<WatchlistActionTypes>) => {
    try {
      dispatch({
        type: ALL_WATCHLIST_LOADING,
      });

      const response = await axios.get("/watchlist/fetch");
      dispatch({
        type: ALL_WATCHLIST,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ALL_WATCHLIST_FAIL,
      });
    }
  };
