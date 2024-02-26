import {
  IndividualCoinActionTypes,
  ALL_COINS_DETAILS_LOADING,
  ALL_COINS_DETAILS,
  ALL_COINS_DETAILS_FAIL,
} from "./IndividualCoinActionTypes";
import { IndividualCoinActionTypesTwo,ALL_COINS_DETAILS_LOADING_TWO,ALL_COINS_DETAILS_TWO,ALL_COINS_DETAILS_FAIL_TWO } from "./IndividualCoinActionTypesTwo";
import { IndividualCoinActionTypesThree,ALL_COINS_DETAILS_LOADING_THREE,ALL_COINS_DETAILS_THREE,ALL_COINS_DETAILS_FAIL_THREE } from "./IndividualCoinActionTypesThree";
import { Dispatch } from "redux";
// import axios from "axios";
import axios from "../API";

export const GetIndividualCoinDetails =
  (coinId: any) => async (dispatch: Dispatch<IndividualCoinActionTypes>) => {
    try {
      dispatch({
        type: ALL_COINS_DETAILS_LOADING,
      });
      const response = await axios.get(
        `https://api.coinranking.com/v2/coin/${coinId}`,
       // `http://localhost:8000/coin/getCoinDetails?coin_uuid=${coinId}`,
        {
          headers: {
            "x-rapidapi-host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST!,
            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY!,
          },
        }
      );
      dispatch({
        type: ALL_COINS_DETAILS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ALL_COINS_DETAILS_FAIL,
      });
    }
  };


  export const GetIndividualCoinDetailsTwo =
  (coinId: any) => async (dispatch: Dispatch<IndividualCoinActionTypesTwo>) => {
    try {
      dispatch({
        type: ALL_COINS_DETAILS_LOADING_TWO,
      });
      const response = await axios.get(
        `https://api.coinranking.com/v2/coin/${coinId}`,
       // `http://localhost:8000/coin/getCoinDetails?coin_uuid=${coinId}`,
        {
          headers: {
            "x-rapidapi-host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST!,
            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY!,
          },
        }
      );
      dispatch({
        type: ALL_COINS_DETAILS_TWO,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ALL_COINS_DETAILS_FAIL_TWO,
      });
    }
  };


  export const GetIndividualCoinDetailsThree =
  (coinId: any) => async (dispatch: Dispatch<IndividualCoinActionTypesThree>) => {
    try {
      dispatch({
        type: ALL_COINS_DETAILS_LOADING_THREE,
      });
      const response = await axios.get(
        `https://api.coinranking.com/v2/coin/${coinId}`,
        // `http://localhost:8000/coin/getCoinDetails?coin_uuid=${coinId}`,
        {
          headers: {
            "x-rapidapi-host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST!,
            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY!,
          },
        }
      );
      dispatch({
        type: ALL_COINS_DETAILS_THREE,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ALL_COINS_DETAILS_FAIL_THREE,
      });
    }
  };
