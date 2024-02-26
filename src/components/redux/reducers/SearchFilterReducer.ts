import {
  ALL_FILTER_LOADING,
  ALL_FILTER,
  ALL_FILTER_FAIL,
  FilterActionTypes,
} from "../actions/SearchFilterActionTypes";

interface FilterDefaultStateI {
  available: boolean;
  data?: any;
}
const FilterDefaultState: FilterDefaultStateI = {
  available: false,
};

const SearchFilterReducer = (
  state: FilterDefaultStateI = FilterDefaultState,
  action: FilterActionTypes
) => {
  switch (action.type) {
    case ALL_FILTER:
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

export default SearchFilterReducer;
