export const ALL_WATCHLIST = "ALL_WATCHLIST";
export const ALL_WATCHLIST_LOADING = "ALL_WATCHLIST_LOADING";
export const ALL_WATCHLIST_FAIL = "ALL_WATCHLIST_FAIL";

export interface AllWatchlistLoading {
  type: typeof ALL_WATCHLIST_LOADING;
}

export interface AllWatchlist {
  type: typeof ALL_WATCHLIST;
  payload: {
    data: any;
  };
}
export interface AllWatchlistFail {
  type: typeof ALL_WATCHLIST_FAIL;
}

export type WatchlistActionTypes =
  | AllWatchlist
  | AllWatchlistLoading
  | AllWatchlistFail;
