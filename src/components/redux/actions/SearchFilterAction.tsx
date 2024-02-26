import {
  ALL_FILTER_LOADING,
  ALL_FILTER,
  ALL_FILTER_FAIL,
  FilterActionTypes,
} from "./SearchFilterActionTypes";
import { Dispatch } from "redux";
import axios from "../API";

export const GetAllFilters =
  (requestBody: any) => async (dispatch: Dispatch<FilterActionTypes>) => {
    console.log("action", requestBody);

    try {
      dispatch({
        type: ALL_FILTER_LOADING,
      });

      const response = await axios.post("coin/searchFilter", requestBody);
      dispatch({
        type: ALL_FILTER,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ALL_FILTER_FAIL,
      });
    }
  };
