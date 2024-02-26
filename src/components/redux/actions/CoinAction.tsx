import {
  CoinActionTypes,
  ALL_COINS,
  ALL_COINS_LOADING,
  ALL_COINS_FAIL,
} from "./CoinActionTypes";
import { Dispatch } from "redux";
import axios from "../API";
// import axios from "axios";

const cryptoApiHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST!,
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY!,
};

export const GetAllCoins =
  () => async (dispatch: Dispatch<CoinActionTypes>) => {
    try {
      dispatch({
        type: ALL_COINS_LOADING,
      });

      // const REACT_APP_GET_ALL_COINS = "coin/getAllCoins" || "";

      const response = await axios.get(
      //  "http://localhost:8000/coin/getAllCoins",
        "https://api.coinranking.com/v2/coins",
        {
          headers: {
            "x-rapidapi-host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST!,
            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY!,
          },
        }
      );
      dispatch({
        type: ALL_COINS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ALL_COINS_FAIL,
      });
    }
  };
