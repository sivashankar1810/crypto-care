export const ALL_COINS_DETAILS_THREE = "ALL_COINS_DETAILS_THREE";
export const ALL_COINS_DETAILS_LOADING_THREE = "ALL_COINS_DETAILS_LOADING_THREE";
export const ALL_COINS_DETAILS_FAIL_THREE = "ALL_COINS_DETAILS_FAIL_THREE";

export interface AllCoinsDetailsLoadingThree {
  type: typeof ALL_COINS_DETAILS_LOADING_THREE;
}

export interface AllCoinsDetailsThree {
  type: typeof ALL_COINS_DETAILS_THREE;
  payload: {
    data: any;
  };
}
export interface AllCoinsDetailsFailThree {
  type: typeof ALL_COINS_DETAILS_FAIL_THREE;
}

export type IndividualCoinActionTypesThree =
  | AllCoinsDetailsLoadingThree
  | AllCoinsDetailsThree
  | AllCoinsDetailsFailThree;
