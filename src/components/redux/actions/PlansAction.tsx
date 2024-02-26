import {
  ALL_PLANS,
  ALL_PLANS_LOADING,
  ALL_PLANS_FAIL,
  PlansActionTypes,
} from "./PlansActionTypes";
import { Dispatch } from "redux";
import axios from "axios";

export const GetAllPlans =
  () => async (dispatch: Dispatch<PlansActionTypes>) => {
    try {
      dispatch({
        type: ALL_PLANS_LOADING,
      });

      const response = await axios.get(
        "http://localhost:8000/subscription/getPlans"
      );
      dispatch({
        type: ALL_PLANS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ALL_PLANS_FAIL,
      });
    }
  };
