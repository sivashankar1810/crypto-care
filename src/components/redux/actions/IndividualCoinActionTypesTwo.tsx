export const ALL_COINS_DETAILS_TWO = "ALL_COINS_DETAILS_TWO";
export const ALL_COINS_DETAILS_LOADING_TWO = "ALL_COINS_DETAILS_LOADING_TWO";
export const ALL_COINS_DETAILS_FAIL_TWO = "ALL_COINS_DETAILS_FAIL_TWO";

export interface AllCoinsDetailsLoadingTwo {
  type: typeof ALL_COINS_DETAILS_LOADING_TWO;
}

export interface AllCoinsDetailsTwo {
  type: typeof ALL_COINS_DETAILS_TWO;
  payload: {
    data: any;
  };
}
export interface AllCoinsDetailsFailTwo {
  type: typeof ALL_COINS_DETAILS_FAIL_TWO;
}

export type IndividualCoinActionTypesTwo =
  | AllCoinsDetailsLoadingTwo
  | AllCoinsDetailsTwo
  | AllCoinsDetailsFailTwo;
