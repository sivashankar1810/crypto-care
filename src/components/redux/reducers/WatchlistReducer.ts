import {
  ALL_WATCHLIST,
  ALL_WATCHLIST_LOADING,
  ALL_WATCHLIST_FAIL,
  WatchlistActionTypes,
} from "../actions/WatchlistActionTypes";

interface WatchlistDefaultStateI {
  available: boolean;
  data?: any;
}
const WatchlistDefaultState: WatchlistDefaultStateI = {
  available: false,
};

const WatchlistReducer = (
  state: WatchlistDefaultStateI = WatchlistDefaultState,
  action: WatchlistActionTypes
) => {
  switch (action.type) {
    case ALL_WATCHLIST:
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

export default WatchlistReducer;
