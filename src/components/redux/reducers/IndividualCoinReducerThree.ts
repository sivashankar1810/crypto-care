import { IndividualCoinActionTypesThree,
    ALL_COINS_DETAILS_THREE } from "../actions/IndividualCoinActionTypesThree";
interface IndividualCoinDefaultStateIII {
    available: boolean;
    data?: any;
  }
  const IndividualCoinDefaultStateThree: IndividualCoinDefaultStateIII = {
    available: false,
  };
  
const IndividualCoinReducerThree = (
    state: IndividualCoinDefaultStateIII = IndividualCoinDefaultStateThree,
    action: IndividualCoinActionTypesThree
  ) => {
    switch (action.type) {
      case ALL_COINS_DETAILS_THREE:
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

  export default IndividualCoinReducerThree; 
  