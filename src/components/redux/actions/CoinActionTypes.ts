export const ADD_USER = "ADD_USER";
export const ALL_COINS = "ALL_COINS";
export const ALL_COINS_LOADING = "ALL_COINS_LOADING";
export const ALL_COINS_FAIL = "ALL_COINS_FAIL";

export interface AddUser {
  type: typeof ADD_USER;
  payload: {
    data: any;
    message: String;
  };
}

export interface AllCoinsLoading {
  type: typeof ALL_COINS_LOADING;
}

export interface AllCoins {
  type: typeof ALL_COINS;
  payload: {
    data: any;
  };
}
export interface AllCoinsFail {
  type: typeof ALL_COINS_FAIL;
}

export type CoinActionTypes =
  | AddUser
  | AllCoins
  | AllCoinsLoading
  | AllCoinsFail;
