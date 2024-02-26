export const ALL_COINS_DETAILS = "ALL_COINS_DETAILS";
export const ALL_COINS_DETAILS_LOADING = "ALL_COINS_DETAILS_LOADING";
export const ALL_COINS_DETAILS_FAIL = "ALL_COINS_DETAILS_FAIL";

export interface AllCoinsDetailsLoading {
  type: typeof ALL_COINS_DETAILS_LOADING;
}

export interface AllCoinsDetails {
  type: typeof ALL_COINS_DETAILS;
  payload: {
    data: any;
  };
}
export interface AllCoinsDetailsFail {
  type: typeof ALL_COINS_DETAILS_FAIL;
}

export type IndividualCoinActionTypes =
  | AllCoinsDetailsLoading
  | AllCoinsDetails
  | AllCoinsDetailsFail;
