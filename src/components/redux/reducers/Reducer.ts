import {
  CoinActionTypes,
  ADD_USER,
  ALL_COINS,
  ALL_COINS_LOADING,
  ALL_COINS_FAIL,
} from "../actions/CoinActionTypes";

interface CoinDefaultStateI {
  available: boolean;
  data?: any;
}
const CoinDefaultState: CoinDefaultStateI = {
  available: false,
};

const CoinReducer = (
  state: CoinDefaultStateI = CoinDefaultState,
  action: CoinActionTypes
) => {
  switch (action.type) {
    case ALL_COINS:
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

export default CoinReducer;
