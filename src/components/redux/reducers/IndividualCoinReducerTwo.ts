import { IndividualCoinActionTypesTwo,ALL_COINS_DETAILS_LOADING_TWO,ALL_COINS_DETAILS_TWO,ALL_COINS_DETAILS_FAIL_TWO } from "../actions/IndividualCoinActionTypesTwo";
interface IndividualCoinDefaultStateII {
    available: boolean;
    data?: any;
  }
  const IndividualCoinDefaultStateTwo: IndividualCoinDefaultStateII = {
    available: false,
  };
  
const IndividualCoinReducerTwo = (
    state: IndividualCoinDefaultStateII = IndividualCoinDefaultStateTwo,
    action: IndividualCoinActionTypesTwo
  ) => {
    switch (action.type) {
      case ALL_COINS_DETAILS_TWO:
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

  export default IndividualCoinReducerTwo; 
  