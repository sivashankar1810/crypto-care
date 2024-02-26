import {
  IndividualCoinActionTypes,
  ALL_COINS_DETAILS_LOADING,
  ALL_COINS_DETAILS,
  ALL_COINS_DETAILS_FAIL,
} from "../actions/IndividualCoinActionTypes";


interface IndividualCoinDefaultStateI {
  available: boolean;
  data?: any;
}
const IndividualCoinDefaultState: IndividualCoinDefaultStateI = {
  available: false,
};

const IndividualCoinReducer = (
  state: IndividualCoinDefaultStateI = IndividualCoinDefaultState,
  action: IndividualCoinActionTypes
) => {
  switch (action.type) {
    case ALL_COINS_DETAILS:
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


export default IndividualCoinReducer;
