export const ALL_FILTER = "ALL_FILTER";
export const ALL_FILTER_LOADING = "ALL_FILTER_LOADING";
export const ALL_FILTER_FAIL = "ALL_FILTER_FAIL";

export interface AllFilterLoading {
  type: typeof ALL_FILTER_LOADING;
}

export interface AllFilter {
  type: typeof ALL_FILTER;
  payload: {
    data: any;
  };
}
export interface AllFilterFail {
  type: typeof ALL_FILTER_FAIL;
}

export type FilterActionTypes = AllFilterLoading | AllFilter | AllFilterFail;
