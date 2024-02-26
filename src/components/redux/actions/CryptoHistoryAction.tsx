import {
  ALL_COINS_HISTORY_LOADING,
  ALL_COINS_HISTORY,
  ALL_COINS_HISTORY_FAIL,
  CryptoDetailsActionTypes,
} from "./CryptoHistoryActionTypes";
import { Dispatch } from "redux";
import axios from "../API";

export const GetCryptoHistory =
  (coinId: any, timeperiod: any) =>
  async (dispatch: Dispatch<CryptoDetailsActionTypes>) => {
    try {
      dispatch({
        type: ALL_COINS_HISTORY_LOADING,
      });
      const response = await axios.get(
     //   `https://api.coinranking.com/v2/coin/${coinId}/history?timeperiod=${timeperiod}`,
        `https://api.coinranking.com/v2/coin/${coinId}/history`,
        {
          headers: {
            "x-access-token": "coinranking119dadda6eaa56d629e339fa5afa4f3982ee9d7c40e79b39",
          },
        }
      );
      dispatch({
        type: ALL_COINS_HISTORY,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ALL_COINS_HISTORY_FAIL,
      });
    }
  };
