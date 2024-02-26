import {
  ALL_PLANS,
  ALL_PLANS_LOADING,
  ALL_PLANS_FAIL,
  PlansActionTypes,
} from "../actions/PlansActionTypes";

interface PlansDefaultStateI {
  available: boolean;
  data?: any;
}
const PlansDefaultState: PlansDefaultStateI = {
  available: false,
};

const PlansReducer = (
  state: PlansDefaultStateI = PlansDefaultState,
  action: PlansActionTypes
) => {
  switch (action.type) {
    case ALL_PLANS:
      return {
        available: true,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default PlansReducer;
