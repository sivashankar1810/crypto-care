export const ALL_COINS_HISTORY = "ALL_COINS_HISTORY";
export const ALL_COINS_HISTORY_LOADING = "ALL_COINS_HISTORY_LOADING";
export const ALL_COINS_HISTORY_FAIL = "ALL_COINS_HISTORY_FAIL";

export interface AllCoinsHistoryLoading {
  type: typeof ALL_COINS_HISTORY_LOADING;
}

export interface AllCoinsHistory {
  type: typeof ALL_COINS_HISTORY;
  payload: {
    data: any;
  };
}
export interface AllCoinsHistoryFail {
  type: typeof ALL_COINS_HISTORY_FAIL;
}

export type CryptoDetailsActionTypes =
  | AllCoinsHistoryLoading
  | AllCoinsHistory
  | AllCoinsHistoryFail;
