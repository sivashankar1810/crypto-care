import { configureStore } from "@reduxjs/toolkit";
import IndividualCoinReducer from "./reducers/IndividualCoinReducer";
import IndividualCoinReducerTwo from "./reducers/IndividualCoinReducerTwo";
import IndividualCoinReducerThree from "./reducers/IndividualCoinReducerThree";
import NewsReducer from "./reducers/NewsReducer";
import CoinReducer from "./reducers/Reducer";
import CryptoHistoryReducer from "./reducers/CryptoHistoryReducer";
import PlansReducer from "./reducers/PlansReducer";
import WatchlistReducer from "./reducers/WatchlistReducer";
import SearchFilterReducer from "./reducers/SearchFilterReducer";

const Store = configureStore({
  reducer: {
    coins: CoinReducer,
    news: NewsReducer,
    getCoinDetails: IndividualCoinReducer,
    getCoinDetailsTwo: IndividualCoinReducerTwo,
    getCoinDetailsThree: IndividualCoinReducerThree,
    getCryptoHistory: CryptoHistoryReducer,
    getPlans: PlansReducer,
    getWatchlist: WatchlistReducer,
    searchResult: SearchFilterReducer,
  },
});

export default Store;
