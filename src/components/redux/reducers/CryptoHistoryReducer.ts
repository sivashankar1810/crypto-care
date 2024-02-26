import {
  ALL_COINS_HISTORY_LOADING,
  ALL_COINS_HISTORY,
  ALL_COINS_HISTORY_FAIL,
  CryptoDetailsActionTypes,
} from "../actions/CryptoHistoryActionTypes";

interface CryptoHistoryDefaultStateI {
  available: boolean;
  data?: any;
}
const CryptoHistoryDefaultState: CryptoHistoryDefaultStateI = {
  available: false,
};

const CryptoHistoryReducer = (
  state: CryptoHistoryDefaultStateI = CryptoHistoryDefaultState,
  action: CryptoDetailsActionTypes
) => {
  switch (action.type) {
    case ALL_COINS_HISTORY:
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

export default CryptoHistoryReducer;
